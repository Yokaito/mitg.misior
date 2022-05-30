import prisma from '@/sdk/lib/prisma';
import { accounts } from '@prisma/client';

export const DbGetAccount = async ({
  id,
  getPassword = false,
}: DbGetAccount.Params) => {
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

  return getPassword ? findedAccount : accountWithoutPassword;
};

export namespace DbGetAccount {
  export type Params = {
    id: number;
    getPassword?: boolean;
  };
  export type Result = Omit<accounts, 'password'>;
}

export default DbGetAccount;
