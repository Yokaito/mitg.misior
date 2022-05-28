import prisma from '@/lib/prisma';
import { newsticker } from '@prisma/client';

export const DbAddNewsticker = async ({
  message,
  icon,
}: DbAddNewsticker.Params) => {
  const createdNewsticker = await prisma.newsticker.create({
    data: {
      message,
      icon,
    },
  });

  return createdNewsticker;
};

export namespace DbAddNewsticker {
  export type Params = {
    message: string;
    icon: string;
  };
  export type Result = newsticker;
}

export default DbAddNewsticker;
