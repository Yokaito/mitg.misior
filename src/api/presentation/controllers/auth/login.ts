import { Controller, HttpResponse } from '@/api/presentation/protocols';
import { badRequest, ok, serverError } from '@/api/presentation/helpers';
import Joi from 'joi';
import {
  DbGetAccountByEmail,
  DbUpdateAccountLastLogin,
} from '@/api/data/usecases';
import bcrypt from 'bcrypt';
import { LoginFailedError } from '../../errors';

export class LoginController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    try {
      const { value, error } = LoginControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const account = await DbGetAccountByEmail({
        email: value.email,
      });

      if (!account) {
        return badRequest(new LoginFailedError());
      }

      const isValid = bcrypt.compareSync(value.password, account.password);

      if (!isValid) {
        return badRequest(new LoginFailedError());
      }

      // remove property password from account
      const accountWithoutPassword = {
        ...account,
        password: undefined,
      };

      await DbUpdateAccountLastLogin({ email: account.email });

      return ok(accountWithoutPassword);
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace LoginController {
  export type Request = {
    email: string;
    password: string;
  };
}

const LoginControllerSchema = Joi.object({
  email: Joi.string().required().email().max(255).min(5),
  password: Joi.string().required().max(40).min(5),
});
