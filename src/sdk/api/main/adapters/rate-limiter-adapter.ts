import { NextApiRequest, NextApiResponse } from 'next';

export const rateLimiterAdapter = async (
  res: NextApiResponse,
  req: NextApiRequest,
  rateLimiters?: any[],
) => {
  if (rateLimiters && rateLimiters.length > 0) {
    try {
      await Promise.all(rateLimiters.map((middleware) => middleware(req, res)));
    } catch (error) {
      res.status(429).json({
        error: `Too Many Requests`,
      });
    }
  }
};
