import { NextApiRequest, NextApiResponse } from 'next';
import { Middleware } from '@/sdk/api/presentation/protocols';

export const middlewareAdapter = async (
  res: NextApiResponse,
  req: NextApiRequest,
  middlewares?: Middleware[],
) => {
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
};
