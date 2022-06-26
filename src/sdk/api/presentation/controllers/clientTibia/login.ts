import { DbGetAccountByEmail } from '@/sdk/api/infra/database';
import { Controller } from '@/sdk/api/presentation/protocols';
import { prisma } from '@/sdk/lib/prisma';
import sha1 from 'sha1';
import createCharacter from '@/sdk/utils/create-character';
import { otConfigs } from '@/misior';
import { verifyPremiumTime } from '@/sdk/utils/premium-time';
import { createDateAsUTC } from '@/sdk/utils/date-format';
import { unauthorizedClientTibia } from '@/sdk/api/presentation/helpers';

/*
  TODO - Implementar o campo de token de autenticação
*/

export class LoginClientController implements Controller {
  async handle(request: LoginClientControllerSpace.Request): Promise<any> {
    const account = await DbGetAccountByEmail({
      email: request.email,
    });

    if (!account) {
      return unauthorizedClientTibia(
        `Tibia account email address or Tibia password is not correct`,
      );
    }

    const passwordIsValid = sha1(request.password) === account.password;

    if (!passwordIsValid) {
      return unauthorizedClientTibia(
        `Tibia account email address or Tibia password is not correct`,
      );
    }

    const dbCharacters = await prisma.players.findMany({
      where: {
        account_id: account.id,
      },
      orderBy: {
        name: `asc`,
      },
    });

    const characters = dbCharacters.map((player) => createCharacter(player));

    const {
      lastDayLoginUpdated,
      premiumDateExpireUnixTime,
      premiumDaysUpdated,
      saveOnDatabase,
      isPremium,
    } = verifyPremiumTime(account.premdays, account.lastday);

    if (saveOnDatabase) {
      await prisma.accounts.update({
        where: {
          id: account.id,
        },
        data: {
          lastday: lastDayLoginUpdated,
          premdays: premiumDaysUpdated,
        },
      });
    }

    await prisma.accounts.update({
      where: {
        id: account.id,
      },
      data: {
        last_date_login: createDateAsUTC(new Date()),
      },
    });

    return {
      playdata: {
        characters: characters,
        worlds: [
          {
            id: otConfigs.server.worldid,
            name: otConfigs.server.worldName,
            externaladdress: otConfigs.server.ip,
            externaladdressprotected: otConfigs.server.ip,
            externaladdressunprotected: otConfigs.server.ip,
            externalport: otConfigs.server.port,
            externalportprotected: otConfigs.server.port,
            externalportunprotected: otConfigs.server.port,
            location: otConfigs.server.location,
            anticheatprotection: otConfigs.server.battleEyeActive,
            pvptype: otConfigs.server.pvpType,
            istournamentworld: false,
            currenttournamentphase: 2,
            previewstate: 0,
            restrictedstore: false,
          },
        ],
      },
      session: {
        fpstracking: false,
        ispremium: otConfigs.server.premiumIsFree ? true : isPremium,
        isreturner: false,
        lastlogintime: lastDayLoginUpdated,
        optiontracking: false,
        premiumuntil: premiumDaysUpdated > 0 ? premiumDateExpireUnixTime : 0,
        returnernotification: false,
        sessionkey: `${account.email}\n${account.password}`,
        showrewardnews: true,
        status: `active`,
        tornamentcyclephase: 1,
        tournamentticketpurchasestate: 0,
      },
    };
  }
}

export namespace LoginClientControllerSpace {
  export type Request = {
    email: string;
    password: string;
    stayloggedin: boolean;
    token?: string;
  };
}

export default LoginClientController;
