/* eslint-disable @next/next/no-server-import-in-page */
import { HttpResponse, Middleware } from '@/sdk/api/presentation/protocols';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { noContent, serverError } from '@/sdk/api/presentation/helpers';
import { AccessLevelUseCase } from '../../data/usecases';

export class ValidationAccessLevelMiddleware implements Middleware {
  constructor(private readonly accessLevels: Array<number>) {}
  async handle(request: NextRequest): Promise<HttpResponse> {
    try {
      const token = await getToken({
        req: request,
        secret: process.env.SECRET,
      });

      const response = await AccessLevelUseCase({
        token,
        accessLevels: this.accessLevels,
      });

      if (response) {
        return response;
      }

      return noContent();
    } catch (error: any) {
      return serverError(error);
    }
  }
}
