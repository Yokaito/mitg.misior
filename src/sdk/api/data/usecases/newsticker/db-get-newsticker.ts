import prisma from '@/sdk/lib/prisma';
import { newsticker } from '@prisma/client';

export const DbGetNewsticker = async ({
  created_at = `desc`,
  limit = 10,
  skip = 0,
}: DbGetNewstickerSpace.Params) => {
  return await prisma.newsticker.findMany({
    orderBy: {
      created_at,
    },
    take: limit,
    skip,
  });
};

export namespace DbGetNewstickerSpace {
  export type Params = {
    created_at: 'asc' | 'desc';
    limit: number;
    skip: number;
  };
  export type Result = newsticker[];
}

export default DbGetNewsticker;
