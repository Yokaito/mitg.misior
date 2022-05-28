import { Controller, HttpResponse } from '@/api/presentation/protocols';
import { badRequest, ok, serverError } from '@/api/presentation/helpers';
import Joi from 'joi';
import { DbDeleteNewsticker } from '@/api/data/usecases/newsticker';
import { IdNotFoundError } from '../../errors';

export class DeleteNewstickerController implements Controller {
  async handle(
    request: DeleteNewstickerController.Request,
  ): Promise<HttpResponse> {
    try {
      const { value, error } =
        DeleteNewstickerControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const newsticker = await DbDeleteNewsticker(value.id);

      if (!newsticker) {
        return badRequest(new IdNotFoundError(`Newsticker`));
      }

      return ok(newsticker);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace DeleteNewstickerController {
  export type Request = {
    id: number;
  };
}

const DeleteNewstickerControllerSchema = Joi.object({
  id: Joi.number().required(),
});
