import { adaptRoute } from '@/sdk/api/main/adapters';
import { GetNewstickerController } from '@/sdk/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/sdk/api/utils/rate-limit';

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
