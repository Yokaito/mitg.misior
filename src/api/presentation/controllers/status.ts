import { badRequest, ok, serverError } from '../helpers';
import { Controller, HttpResponse } from '../protocols';
import Joi from 'joi';
import { rateLimitCache } from '@/api/utils/rate-limit';

const limiter = rateLimitCache({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export class StatusController implements Controller {
  async handle(request: StatusController.Request): Promise<HttpResponse> {
    try {
      const { value, error } = StatusControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      return ok({ value, ok: `status:ok` });
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace StatusController {
  export type Request = {
    statusId: number;
  };
}

const StatusControllerSchema = Joi.object({
  statusId: Joi.number(),
});
