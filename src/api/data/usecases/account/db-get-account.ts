import prisma from '@/lib/prisma';
import { accounts } from '@prisma/client';

export const DbGetAccount = async ({ id }: DbGetAccount.Params) => {
  const findedAccount = await prisma.accounts.findUnique({
    where: {
      id,
    },
  });

  if (!findedAccount) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...accountWithoutPassword } = findedAccount;

  return accountWithoutPassword;
};

export namespace DbGetAccount {
  export type Params = {
    id: number;
  };
  export type Result = Omit<accounts, 'password'>;
}

export default DbGetAccount;
