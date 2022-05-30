import { Controller, Middleware } from '@/sdk/api/presentation/protocols';
import { NextApiRequest, NextApiResponse } from 'next';

export const adaptRoute = (
  controller: Controller,
  reqTypes: Array<'body' | 'query'>,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  middlewares?: Middleware[],
  rateLimiters?: any[],
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (rateLimiters && rateLimiters.length > 0) {
      try {
        await Promise.all(
          rateLimiters.map((middleware) => middleware(req, res)),
        );
      } catch (error) {
        res.status(429).json({
          error: `Too Many Requests`,
        });
      }
    }

    if (middlewares && middlewares.length > 0) {
      for (const middleware of middlewares) {
        const middlewareResponse = await middleware.handle(req, res);
        if (
          middlewareResponse.statusCode >= 200 &&
          middlewareResponse.statusCode < 300
        ) {
          continue;
        } else {
          return res
            .status(middlewareResponse.statusCode)
            .json({ error: middlewareResponse.body });
        }
      }
    }

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
