import { adaptRoute } from '@/api/main/adapters';
import { GetNewstickerController } from '@/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/api/utils/rate-limit';

const rateLimiters = getRateLimitMiddlewares({ limit: 50 }).map(
  applyMiddleware,
);

export default adaptRoute(
  new GetNewstickerController(),
  [`query`, `body`],
  `GET`,
  [],
  rateLimiters,
);
