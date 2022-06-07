import { Controller, HttpResponse } from '@/sdk/api/presentation/protocols';
import { badRequest, ok, serverError } from '@/sdk/api/presentation/helpers';
import Joi from 'joi';
import { LoginUseCase } from '@/sdk/api/data/usecases';

export class LoginController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    try {
      const { value, error } = LoginControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const response = await LoginUseCase({
        email: value.email,
        password: value.password,
      });

      if (`statusCode` in response) {
        return response;
      }

      return ok(response);
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
