import { adaptRoute } from '@/sdk/api/main/adapters';
import { EmailInUseController } from '@/sdk/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/sdk/utils/rate-limit';

const rateLimiters = getRateLimitMiddlewares({
  limit: 50,
  delayAfter: 10,
  windowToDelayReset: 10 * 1000,
}).map(applyMiddleware);

// api/newsticker/add, POST, Validation 4,5,6
export default adaptRoute(
  new EmailInUseController(),
  [`body`],
  `POST`,
  [],
  rateLimiters,
);
