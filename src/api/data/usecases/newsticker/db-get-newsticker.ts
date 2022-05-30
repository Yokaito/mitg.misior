import prisma from '@/sdk/lib/prisma';
import { newsticker } from '@prisma/client';

export const DbGetNewsticker = async ({
  created_at = `desc`,
  limit = 10,
  skip = 0,
}: DbGetNewsticker.Params) => {
  const createdNewsticker = await prisma.newsticker.findMany({
    orderBy: {
      created_at,
    },
    take: limit,
    skip,
  });

  return createdNewsticker;
};

export namespace DbGetNewsticker {
  export type Params = {
    created_at: 'asc' | 'desc';
    limit: number;
    skip: number;
  };
  export type Result = newsticker[];
}

export default DbGetNewsticker;
