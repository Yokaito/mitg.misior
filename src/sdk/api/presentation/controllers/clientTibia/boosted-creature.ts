import prisma from '@/sdk/lib/prisma';
import { Controller } from '../../protocols';

export class BoostedCreatureController implements Controller {
  async handle(): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const boostedCreature = await prisma.boosted_creature.findMany();

    return {
      raceid: 796,
    };
  }
}

export default BoostedCreatureController;
