import prisma from '@/sdk/lib/prisma';
import { accounts } from '@prisma/client';

export const DbGetAccountByEmail = async ({
  email,
}: DbGetAccountByEmail.Params) => {
  const findedAccount = await prisma.accounts.findUnique({
    where: {
      email,
    },
  });

  return findedAccount;
};

export namespace DbGetAccountByEmail {
  export type Params = {
    email: string;
    getPassword?: boolean;
  };
  export type Result = accounts;
}

export default DbGetAccountByEmail;
