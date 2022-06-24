import prisma from '@/sdk/lib/prisma';
import { Controller } from '../../protocols';

export class CacheInfoController implements Controller {
  async handle(): Promise<any> {
    const playersOnline = await prisma.players_online.count();

    return {
      playersonline: playersOnline,
      twitchstreams: 15,
      twitchviewer: 10,
      gamingyoutubestreams: 23,
      gamingyoutubeviewer: 21,
    };
  }
}

export default CacheInfoController;
