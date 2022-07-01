import { adaptRoute } from '@/sdk/api/main/adapters';
import { CreateAccountController } from '@/sdk/api/presentation/controllers/account';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/sdk/utils/rate-limit';

const rateLimiters = getRateLimitMiddlewares({
  limit: 10,
  delayAfter: 3,
  windowToDelayReset: 10 * 1000,
}).map(applyMiddleware);

// api/newsticker/add, POST, Validation 4,5,6
export default adaptRoute(
  new CreateAccountController(),
  [`body`],
  `POST`,
  [],
  rateLimiters,
);
