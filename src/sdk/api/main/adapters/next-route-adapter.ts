import { Controller, Middleware } from '@/sdk/api/presentation/protocols';
import { NextApiRequest, NextApiResponse } from 'next';

import { rateLimiterAdapter } from './rate-limiter-adapter';
import { middlewareAdapter } from './middleware-adapter';

export const adaptRoute = (
  controller: Controller,
  reqTypes: Array<'body' | 'query'>,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  middlewares?: Middleware[],
  rateLimiters?: any[],
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await rateLimiterAdapter(res, req, rateLimiters);
    await middlewareAdapter(res, req, middlewares);
    res.setHeader(`X-Powered-by`, `misior`);

    let request = {};
    const methodReq = req.method;

    if (methodReq !== method) {
      res.status(405).json({
        error: `Method not allowed`,
      });

      return;
    }

    reqTypes?.map((type) => {
      request = {
        ...request,
        ...(req[type] || {}),
      };
    });

    const httpResponse = await controller.handle(request);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode < 300) {
      if (httpResponse.body) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        res.status(httpResponse.statusCode).end();
      }
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body,
      });
    }
  };
};
