import { adaptRoute } from '@/api/main/adapters';
import { StatusController } from '@/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/api/utils/rate-limit';

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
