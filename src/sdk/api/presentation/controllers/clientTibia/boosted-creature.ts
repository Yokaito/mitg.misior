import prisma from '@/sdk/lib/prisma';
import { Controller } from '../../protocols';

export class BoostedCreatureController implements Controller {
  async handle(): Promise<any> {
    const boostedCreature = await prisma.boosted_creature.findMany();

    if (!boostedCreature) {
      return {
        raceid: 796,
      };
    }

    return {
      raceid: parseInt(boostedCreature[0].raceid),
    };
  }
}

export default BoostedCreatureController;
