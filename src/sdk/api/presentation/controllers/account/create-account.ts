import Joi from 'joi';
import { badRequest, noContent, serverError } from '../../helpers';
import { DbGetAccountByEmail } from '@/sdk/api/infra/database';
import { Controller, HttpResponse } from '../../protocols';
import { EmailIsAlreadyInUseError } from '../../errors';

export class CreateAccountController implements Controller {
  async handle(
    request: CreateAccountController.Request,
  ): Promise<HttpResponse> {
    try {
      const { value, error } = CreateAccountControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const account = await DbGetAccountByEmail({ email: value.email });

      if (account) {
        return badRequest(new EmailIsAlreadyInUseError(`email`));
      }

      return noContent();
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace CreateAccountController {
  export type Request = {
    accountName: string;
    email: string;
    password: string;
    samePassword: string;
  };
}

const CreateAccountControllerSchema = Joi.object({
  accountName: Joi.string().min(3).max(15).required(),
  email: Joi.string().min(5).max(50).required().email(),
  password: Joi.string().min(6).max(50).required(),
  samePassword: Joi.string().equal(Joi.ref(`password`)),
  checkbox: Joi.boolean().optional(),
});
