import { badRequest, ok, serverError } from '../helpers';
import { Controller, HttpResponse } from '../protocols';
import { ObjectSchema } from 'joi';

export class StatusController implements Controller {
  constructor(private readonly joi: ObjectSchema) {}
  async handle(request: StatusController.Request): Promise<HttpResponse> {
    try {
      const { value, error } = this.joi.validate(request);

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
