import sha1 from 'sha1';

export const CryptographyAdapter =
  (): CryptographyAdapterSpace.CryptographyAdapter => {
    const hash = (password: string) => {
      return sha1(password);
    };

    const compare = (password: string, encryptedPassword: string) => {
      return sha1(password) === encryptedPassword;
    };

    return {
      hash,
      compare,
    };
  };

namespace CryptographyAdapterSpace {
  export type CryptographyAdapter = {
    hash: (password: string) => string;
    compare: (password: string, encryptedPassword: string) => boolean;
  };
}
