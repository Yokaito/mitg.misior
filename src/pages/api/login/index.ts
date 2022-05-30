import { adaptRoute } from '@/sdk/api/main/adapters';
import { LoginController } from '@/sdk/api/presentation/controllers';

// api/login, POST
export default adaptRoute(new LoginController(), [`body`], `POST`);
