import { adaptRoute } from '@/sdk/api/main/adapters';
import { AddNewstickerController } from '@/sdk/api/presentation/controllers';
import { ValidationAccessLevelMiddleware } from '@/sdk/api/presentation/middlewares';

// api/newsticker/add, POST, Validation 4,5,6
export default adaptRoute(new AddNewstickerController(), [`body`], `POST`, [
  new ValidationAccessLevelMiddleware([4, 5, 6]),
]);
