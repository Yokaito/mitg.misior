import prisma from '@/sdk/lib/prisma';

export const DbUpdateAccountLastLogin = async ({
  email,
}: DbUpdateAccountLastLoginSpace.Params) => {
  const responseUpdate = await prisma.accounts.update({
    data: {
      last_date_login: new Date(),
    },
    where: {
      email,
    },
  });

  return responseUpdate ? true : false;
};

export namespace DbUpdateAccountLastLoginSpace {
  export type Params = {
    email: string;
  };
  export type Result = boolean;
}

export default DbUpdateAccountLastLogin;
