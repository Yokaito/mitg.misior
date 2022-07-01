import prisma from '@/sdk/lib/prisma';
import { accounts } from '@prisma/client';

export const DbGetAccountByName = async ({
  name,
}: DbGetAccountByNameSpace.Params) => {
  return prisma.accounts.findUnique({
    where: {
      name,
    },
  });
};

export namespace DbGetAccountByNameSpace {
  export type Params = {
    name: string;
  };
  export type Result = accounts;
}

export default DbGetAccountByName;
