import { players } from '@prisma/client';
import { getVocationName } from './get-vocation';
import { otConfigs } from '@/misior';

export const createCharacter = (player: players) => {
  return {
    worldid: otConfigs.server.worldid,
    name: player.name,
    ismale: player.sex === 1,
    tutorial: player.istutorial,
    level: player.level,
    vocation: getVocationName(player.vocation),
    outfitid: player.looktype,
    headcolor: player.lookhead,
    torsocolor: player.lookbody,
    legscolor: player.looklegs,
    detailcolor: player.lookfeet,
    addonsflags: player.lookaddons,
    ishidden: player.ishidden,
    istournamentparticipant: false,
    ismaincharacter: player.mainCharacter,
    dailyrewardstate: player.isreward,
    remainingdailytournamentplaytime: false,
  };
};

export default createCharacter;
