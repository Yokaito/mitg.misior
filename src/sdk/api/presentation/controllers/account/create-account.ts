import Joi from 'joi';
import { badRequest, noContent, serverError } from '../../helpers';
import {
  DbGetAccountByEmail,
  DbGetAccountByName,
} from '@/sdk/api/infra/database';
import { Controller, HttpResponse } from '../../protocols';
import {
  EmailIsAlreadyInUseError,
  NameIsAlreadyInUseError,
} from '../../errors';
import { CreateAccountUseCase } from '@/sdk/api/data/usecases';

export class CreateAccountController implements Controller {
  async handle(
    request: CreateAccountController.Request,
  ): Promise<HttpResponse> {
    try {
      const { value, error } = CreateAccountControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const accountEmail = await DbGetAccountByEmail({ email: value.email });

      if (accountEmail) {
        return badRequest(new EmailIsAlreadyInUseError(`email`));
      }

      const accountName = await DbGetAccountByName({ name: value.accountName });

      if (accountName) {
        return badRequest(new NameIsAlreadyInUseError(`accountName`));
      }

      await CreateAccountUseCase({
        email: value.email,
        name: value.accountName,
        password: value.password,
      });

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
