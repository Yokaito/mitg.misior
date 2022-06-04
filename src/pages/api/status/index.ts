import { adaptRoute } from '@/sdk/api/main/adapters';
import { StatusController } from '@/sdk/api/presentation/controllers';
import {
  applyMiddleware,
  getRateLimitMiddlewares,
} from '@/sdk/utils/rate-limit';
import Joi from 'joi';

const rateLimiters = getRateLimitMiddlewares({ limit: 50 }).map(
  applyMiddleware,
);

const validation = Joi.object({
  statusId: Joi.number().integer().greater(3).required(),
});

export default adaptRoute(
  new StatusController(validation),
  [`body`],
  `GET`,
  [],
  rateLimiters,
);
