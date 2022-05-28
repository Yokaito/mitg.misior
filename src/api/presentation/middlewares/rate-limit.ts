import { Middleware } from '../protocols';
import { NextApiResponse } from 'next';
import { noContent, toManyRequests } from '../helpers';
import { RateLimitExceededError } from '../errors';
import LRUCache from 'lru-cache';

export class RateLimitMiddleware implements Middleware {
  constructor(
    private readonly tokenCache: LRUCache<any, any>,
    private readonly limit: number,
    private readonly token: string,
  ) {}
  async handle(_req: any, res: NextApiResponse): Promise<any> {
    const tokenCount: any = this.tokenCache.get(this.token) || [0];
    if (tokenCount[0] === 0) {
      this.tokenCache.set(this.token, tokenCount);
    }
    tokenCount[0] += 1;

    const currentUsage = tokenCount[0];
    const isRateLimited = currentUsage >= this.limit;
    res.setHeader(`X-RateLimit-Limit`, this.limit);
    res.setHeader(
      `X-RateLimit-Remaining`,
      isRateLimited ? 0 : this.limit - currentUsage,
    );

    if (isRateLimited) {
      return toManyRequests(new RateLimitExceededError());
    }

    return noContent();
  }
}
