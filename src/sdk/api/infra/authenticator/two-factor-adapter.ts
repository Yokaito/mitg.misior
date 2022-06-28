import env from '@/sdk/environment';
import axios from 'axios';
import { removeHttp } from '@/sdk/utils/remove-http';
import { URLSearchParams } from 'url';

const apiTwoFactor = axios.create({
  baseURL: env.twoFactorAuthentication.url,
  headers: {
    'X-RapidAPI-Key': env.twoFactorAuthentication.key,
    'X-RapidAPI-Host': removeHttp(env.twoFactorAuthentication.url),
  },
});

export const TwoFactorAdapter = (): TwoFactorAdapterSpace.TwoFactorAdapter => {
  const newSecret = async (): Promise<string> => {
    const response = await apiTwoFactor.post(`/new_v2/`);

    return response.data;
  };

  const generateQrCode = async (
    secret: string,
    provedor: string,
    email: string,
  ): Promise<string> => {
    const encodedParams = new URLSearchParams();
    encodedParams.append(`secret`, secret);
    encodedParams.append(`issuer`, provedor);
    encodedParams.append(`account`, email);

    const response = await apiTwoFactor.post(`/enroll/`, encodedParams);

    return response.data;
  };

  const validateCode = async (
    code: string,
    secret: string,
  ): Promise<boolean> => {
    const encodedParams = new URLSearchParams();
    encodedParams.append(`secret`, secret);
    encodedParams.append(`code`, code);

    const { data } = await apiTwoFactor.post(`/validate/`, encodedParams);

    return data === `True`;
  };

  return {
    newSecret,
    generateQrCode,
    validateCode,
  };
};

namespace TwoFactorAdapterSpace {
  export type TwoFactorAdapter = {
    newSecret: () => Promise<string>;
    generateQrCode: (
      secret: string,
      provedor: string,
      email: string,
    ) => Promise<string>;
    validateCode: (code: string, secret: string) => Promise<boolean>;
  };
}
