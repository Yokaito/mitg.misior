import prisma from '@/sdk/lib/prisma';
import { newsticker } from '@prisma/client';

export const DbAddNewsticker = async ({
  message,
  icon,
}: DbAddNewstickerSpace.Params) => {
  return prisma.newsticker.create({
    data: {
      message,
      icon,
    },
  });
};

export namespace DbAddNewstickerSpace {
  export type Params = {
    message: string;
    icon: string;
  };
  export type Result = newsticker;
}

export default DbAddNewsticker;
