import { newsticker } from '@prisma/client';
import prisma from '@/lib/prisma';

export const DbDeleteNewsticker = async (id: DbDeleteNewsticker.Params) => {
  const newstickerFounded = await prisma.newsticker.findUnique({
    where: {
      id,
    },
  });

  if (!newstickerFounded) {
    return null;
  }

  const newsticker = await prisma.newsticker.delete({
    where: {
      id,
    },
  });

  return newsticker;
};

export namespace DbDeleteNewsticker {
  export type Params = number;
  export type Result = newsticker | null;
}

export default DbDeleteNewsticker;
