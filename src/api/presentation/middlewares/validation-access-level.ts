/* eslint-disable @next/next/no-server-import-in-page */
import { Middleware } from '@/api/presentation/protocols';
import { NextRequest } from 'next/server';
import { AuthorizationNotFound, PermissionDeniedError } from '../errors';
import { noContent, serverError, unauthorized } from '../helpers';
import { getToken } from 'next-auth/jwt';
import { DbGetAccount } from '@/api/data/usecases';

export class ValidationAccessLevelMiddleware implements Middleware {
  constructor(private readonly accessLevels: Array<number>) {}
  async handle(request: NextRequest): Promise<any> {
    try {
      const token = await getToken({
        req: request,
        secret: process.env.SECRET,
      });

      if (!token) {
        return unauthorized(new AuthorizationNotFound());
      }

      if (!this.accessLevels.includes(Number(token.accessLevel))) {
        return unauthorized(new PermissionDeniedError());
      }

      const account = await DbGetAccount({ id: Number(token?.id) });

      if (!account) {
        return unauthorized(new PermissionDeniedError());
      }

      if (!this.accessLevels.includes(Number(account.access_level))) {
        return unauthorized(new PermissionDeniedError());
      }

      return noContent();
    } catch (error: any) {
      return serverError(error);
    }
  }
}
