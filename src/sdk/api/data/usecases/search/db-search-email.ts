import prisma from '@/sdk/lib/prisma';
import { accounts } from '@prisma/client';

export const DbSearchEmail = async ({
  email,
}: DbSearchEmailSpace.Params): Promise<DbSearchEmailSpace.Result> => {
  const accountsFinded = await prisma.accounts.findMany({
    where: {
      email: {
        contains: email,
      },
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  if (accountsFinded.length === 0) {
    return null;
  }

  return accountsFinded;
};

export namespace DbSearchEmailSpace {
  export type Params = {
    email: string;
  };
  export type Result = Pick<accounts, 'id' | 'email' | 'name'>[] | null;
}

export default DbSearchEmail;
