import { Controller, HttpResponse } from '@/api/presentation/protocols';
import { badRequest, ok, serverError } from '@/api/presentation/helpers';
import Joi from 'joi';
import DbAddNewsticker from '@/api/data/usecases/newsticker/db-add-newsticker';
import { ServerError } from '@/api/presentation/errors';

export class AddNewstickerController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    try {
      const { value, error } = AddNewstickerControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const newNewsticker = await DbAddNewsticker(value);
      if (!newNewsticker) {
        return serverError(new ServerError());
      }

      return ok(newNewsticker);
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace AddNewstickerController {
  export type Request = {
    message: string;
    icon: string;
  };
}

const AddNewstickerControllerSchema = Joi.object({
  message: Joi.string().required(),
  icon: Joi.string().required(),
});
