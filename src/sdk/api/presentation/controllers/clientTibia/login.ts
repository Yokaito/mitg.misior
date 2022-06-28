import { DbGetAccountByEmail } from '@/sdk/api/infra/database';
import { Controller } from '@/sdk/api/presentation/protocols';
import { prisma } from '@/sdk/lib/prisma';
import createCharacter from '@/sdk/utils/create-character';
import { otConfigs } from '@/misior';
import { verifyPremiumTime } from '@/sdk/utils/premium-time';
import { createDateAsUTC } from '@/sdk/utils/date-format';
import { unauthorizedClientTibia } from '@/sdk/api/presentation/helpers';
import { CryptographyAdapter } from '@/sdk/api/infra/cryptography';
import Joi from 'joi';

/*
  TODO - Implementar o campo de token de autenticação
*/

export class LoginClientController implements Controller {
  async handle(request: LoginClientControllerSpace.Request): Promise<any> {
    const { value, error } = LoginClientControllerSchema.validate(request);
    const { compare } = CryptographyAdapter();

    if (error) {
      return unauthorizedClientTibia(error.message, 3, error);
    }

    const account = await DbGetAccountByEmail({
      email: value.email,
    });

    if (!account) {
      return unauthorizedClientTibia(
        `Tibia account email address or Tibia password is not correct`,
        3,
      );
    }

    const passwordIsValid = compare(value.password, account.password);

    if (!passwordIsValid) {
      return unauthorizedClientTibia(
        `Tibia account email address or Tibia password is not correct`,
        3,
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
        lastlogintime: account.lastday,
        optiontracking: false,
        premiumuntil: premiumDaysUpdated > 0 ? premiumDateExpireUnixTime : 0,
        returnernotification: false,
        sessionkey: `${account.email}\n${value.password}`,
        showrewardnews: true,
        status: `active`,
        tournamentticketpurchasestate: 0,
      },
    };
  }
}

const LoginClientControllerSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  stayloggedin: Joi.boolean().optional(),
  token: Joi.string().optional(),
  type: Joi.string().optional(),
});

export namespace LoginClientControllerSpace {
  export type Request = {
    email: string;
    password: string;
    stayloggedin: boolean;
    token?: string;
  };
}

export default LoginClientController;
