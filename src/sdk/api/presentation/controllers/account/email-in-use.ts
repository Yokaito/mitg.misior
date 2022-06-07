import { DbGetAccountByEmail } from '@/sdk/api/infra/database';
import Joi from 'joi';
import { badRequest, noContent, ok, serverError } from '../../helpers';
import { Controller, HttpResponse } from '../../protocols';

export class EmailInUseController implements Controller {
  async handle(request: EmailInUseController.Request): Promise<HttpResponse> {
    try {
      const { value, error } = EmailInUsedControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const account = await DbGetAccountByEmail({ email: value.email });

      if (!account) {
        return noContent();
      }

      return ok({ email: account.email });
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace EmailInUseController {
  export type Request = {
    email: string;
  };
}

const EmailInUsedControllerSchema = Joi.object({
  email: Joi.string().min(3).max(255).required().email(),
});
