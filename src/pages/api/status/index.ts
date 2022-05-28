import { adaptRoute } from '@/api/main/adapters';
import { StatusController } from '@/api/presentation/controllers';
import { RateLimitMiddleware } from '@/api/presentation/middlewares';
import LRUCache from 'lru-cache';

const tokenCache = new LRUCache({
  max: 500,
  maxAge: 60 * 1000,
});

export default adaptRoute(new StatusController(), [`body`], `GET`, [
  new RateLimitMiddleware(tokenCache, 100, `CACHE_TOKEN`),
]);
