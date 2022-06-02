import { adaptRoute } from '@/sdk/api/main/adapters';
import { SearchByEmailController } from '@/sdk/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/sdk/utils/rate-limit';

const rateLimiters = getRateLimitMiddlewares({
  limit: 50,
  delayAfter: 5,
  windowToDelayReset: 5 * 1000,
}).map(applyMiddleware);

export default adaptRoute(
  new SearchByEmailController(),
  [`body`, `query`],
  `GET`,
  [],
  rateLimiters,
);
