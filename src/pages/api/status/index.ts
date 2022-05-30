import { adaptRoute } from '@/sdk/api/main/adapters';
import { StatusController } from '@/sdk/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/sdk/api/utils/rate-limit';

const rateLimiters = getRateLimitMiddlewares({ limit: 50 }).map(
  applyMiddleware,
);

export default adaptRoute(
  new StatusController(),
  [`body`],
  `GET`,
  [],
  rateLimiters,
);
