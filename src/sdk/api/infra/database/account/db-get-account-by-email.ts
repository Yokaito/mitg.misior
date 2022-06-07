import prisma from '@/sdk/lib/prisma';
import { accounts } from '@prisma/client';

export const DbGetAccountByEmail = async ({
  email,
}: DbGetAccountByEmailSpace.Params) => {
  return prisma.accounts.findUnique({
    where: {
      email,
    },
  });
};

export namespace DbGetAccountByEmailSpace {
  export type Params = {
    email: string;
  };
  export type Result = accounts;
}

export default DbGetAccountByEmail;
