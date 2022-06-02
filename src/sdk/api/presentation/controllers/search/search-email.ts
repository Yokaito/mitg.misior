import { Controller, HttpResponse } from '@/sdk/api/presentation/protocols';
import Joi from 'joi';
import {
  badRequest,
  noContent,
  ok,
  serverError,
} from '@/sdk/api/presentation/helpers';
import { DbSearchEmail } from '@/sdk/api/infra/database';

export class SearchByEmailController implements Controller {
  async handle(
    request: SearchByEmailControllerSpace.Request,
  ): Promise<HttpResponse> {
    try {
      const { value, error } = SearchByEmailControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const emailWithout = value.email.slice(0, value.email.indexOf(`@`));
      const accounts = await DbSearchEmail({ email: emailWithout });

      if (!accounts) {
        return noContent();
      }

      return ok(accounts);
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace SearchByEmailControllerSpace {
  export type Request = {
    email: string;
  };
}

const SearchByEmailControllerSchema = Joi.object({
  email: Joi.string().required().min(3).email(),
});
