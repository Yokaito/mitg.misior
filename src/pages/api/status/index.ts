import { adaptRoute } from '@/api/main/adapters';
import { StatusController } from '@/api/presentation/controllers';

export default adaptRoute(new StatusController(), [`body`], `POST`);
