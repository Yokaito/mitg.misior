import prisma from '@/sdk/lib/prisma';
import { convertToUnixTime, createDateAsUTC } from '@/sdk/utils/date-format';
import { CryptographyAdapter } from '@/sdk/api/infra/cryptography';
import { misiorWeb } from '@/misior';

export const CreateAccountUseCase = async ({
  email,
  name,
  password,
}: CreateAccountUseCaseSpace.Params) => {
  const { hash } = CryptographyAdapter();

  const creationDate = convertToUnixTime(
    createDateAsUTC(new Date()).toString(),
  );

  const account = await prisma.accounts.create({
    data: {
      name: name,
      email: email,
      password: hash(password),
      access_level: 1,
      type: 1,
      creation: creationDate,
      premdays: misiorWeb.freePremiumDaysAfterRegistration,
    },
  });

  return account ? true : false;
};

export namespace CreateAccountUseCaseSpace {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
}
