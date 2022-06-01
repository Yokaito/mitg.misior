import { newsticker } from '@prisma/client';
import prisma from '@/sdk/lib/prisma';

export const DbDeleteNewsticker = async (
  id: DbDeleteNewstickerSpace.Params,
) => {
  const newstickerFounded = await prisma.newsticker.findUnique({
    where: {
      id,
    },
  });

  if (!newstickerFounded) {
    return null;
  }

  const deletedNewsticker = await prisma.newsticker.delete({
    where: {
      id,
    },
  });

  return deletedNewsticker;
};

export namespace DbDeleteNewstickerSpace {
  export type Params = number;
  export type Result = newsticker | null;
}

export default DbDeleteNewsticker;
