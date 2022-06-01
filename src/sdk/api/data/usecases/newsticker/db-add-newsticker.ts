import prisma from '@/sdk/lib/prisma';
import { newsticker } from '@prisma/client';

export const DbAddNewsticker = async ({
  message,
  icon,
}: DbAddNewstickerSpace.Params) => {
  const createdNewsticker = await prisma.newsticker.create({
    data: {
      message,
      icon,
    },
  });

  return createdNewsticker;
};

export namespace DbAddNewstickerSpace {
  export type Params = {
    message: string;
    icon: string;
  };
  export type Result = newsticker;
}

export default DbAddNewsticker;
