import { DbGetAccount } from '@/sdk/api/infra/database';
import {
  AuthorizationNotFound,
  PermissionDeniedError,
} from '@/sdk/api/presentation/errors';
import { unauthorized } from '@/sdk/api/presentation/helpers';
import { JWT } from 'next-auth/jwt';

export const AccessLevelUseCase = async ({
  token,
  accessLevels,
}: AccessLevelUseCaseSpace.Params) => {
  if (!token) {
    return unauthorized(new AuthorizationNotFound());
  }

  if (!accessLevels.includes(Number(token?.accessLevel))) {
    return unauthorized(new AuthorizationNotFound());
  }

  const account = await DbGetAccount({ id: Number(token?.id) });

  if (!account) {
    return unauthorized(new PermissionDeniedError());
  }

  if (!accessLevels.includes(Number(account.access_level))) {
    return unauthorized(new PermissionDeniedError());
  }

  return null;
};

export namespace AccessLevelUseCaseSpace {
  export type Params = {
    token: JWT | null;
    accessLevels: Array<number>;
  };
}
