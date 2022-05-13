import { badRequest, noContent, serverError } from '../helpers';
import { Controller, HttpResponse } from '../protocols';
import Joi from 'joi';

export class StatusController implements Controller {
  async handle(request: StatusController.Request): Promise<HttpResponse> {
    try {
      const { value, error } = StatusControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      console.log(value);

      return noContent();
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
  statusId: Joi.number().required(),
});
