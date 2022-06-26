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
            anticheatprotection: otConfigs.server.battleEyeActive,
            currenttournamentphase: 2,
            externaladdress: otConfigs.server.ip,
            externaladdressprotected: otConfigs.server.ip,
            externaladdressunprotected: otConfigs.server.ip,
            externalport: otConfigs.server.loginProtocolPort,
            externalportprotected: otConfigs.server.gameProtocolPort,
            externalportunprotected: otConfigs.server.gameProtocolPort,
            id: otConfigs.server.worldid,
            istournamentworld: false,
            location: otConfigs.server.location,
            name: otConfigs.server.worldName,
            previewstate: 0,
            pvptype: otConfigs.server.pvpType,
            restrictedstore: false,
          },
        ],
      },
      session: {
        emailcoderequest: false,
        fpstracking: false,
        ispremium: otConfigs.server.premiumIsFree ? true : isPremium,
        isreturner: true,
        lastlogintime: lastDayLoginUpdated,
        optiontracking: false,
        premiumuntil: premiumDaysUpdated > 0 ? premiumDateExpireUnixTime : 0,
        returnernotification: false,
        sessionkey: `${account.email}\n${request.password}`,
        showrewardnews: true,
        status: `active`,
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
