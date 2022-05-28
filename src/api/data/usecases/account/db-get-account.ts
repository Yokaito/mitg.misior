import prisma from '@/lib/prisma';
import { accounts } from '@prisma/client';

export const DbGetAccount = async ({ id }: DbGetAccount.Params) => {
  const findedAccount = await prisma.accounts.findUnique({
    where: {
      id,
    },
    select: {
      password: false,
    },
  });

  return findedAccount;
};

export namespace DbGetAccount {
  export type Params = {
    id: number;
  };
  export type Result = Omit<accounts, 'password'>;
}

export default DbGetAccount;
