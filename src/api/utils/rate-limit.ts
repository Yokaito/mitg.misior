import lru from 'lru-cache';
import { NextApiResponse } from 'next';

type RateLimitOptions = {
  uniqueTokenPerInterval: number;
  interval: number;
};

export const rateLimitCache = ({
  uniqueTokenPerInterval,
  interval,
}: RateLimitOptions) => {
  const tokenCache = new lru({
    max: Number(uniqueTokenPerInterval || 500),
    maxAge: Number(interval || 60000),
  });

  return {
    check: (res: NextApiResponse, limit: any, token: string) => {
      new Promise((resolve: any, reject) => {
        const tokenCount: any = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= parseInt(limit, 10);
        res.setHeader(`X-RateLimit-Limit`, limit);
        res.setHeader(
          `X-RateLimit-Remaining`,
          isRateLimited ? 0 : limit - currentUsage,
        );

        return isRateLimited ? reject() : resolve();
      });
    },
  };
};
