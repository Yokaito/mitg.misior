import { Controller, HttpResponse } from '@/sdk/api/presentation/protocols';
import { badRequest, ok, serverError } from '@/sdk/api/presentation/helpers';
import Joi from 'joi';
import {
  DbGetNewsticker,
  DbGetNewstickerSpace,
} from '@/sdk/api/data/usecases/newsticker';

export class GetNewstickerController implements Controller {
  async handle(
    request: GetNewstickerController.Request,
  ): Promise<HttpResponse> {
    try {
      const { value, error } = GetNewstickerControllerSchema.validate(request);

      if (error) {
        return badRequest(error);
      }

      const newstickers = await DbGetNewsticker({ ...value });

      return ok(newstickers);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
export namespace GetNewstickerController {
  export type Request = DbGetNewstickerSpace.Params;
}

const GetNewstickerControllerSchema = Joi.object({
  created_at: Joi.string().valid(`asc`, `desc`),
  limit: Joi.number().integer().min(1),
  skip: Joi.number().integer().min(0),
});
