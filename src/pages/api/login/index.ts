import { adaptRoute } from '@/api/main/adapters';
import { LoginController } from '@/api/presentation/controllers';

// api/login, POST
export default adaptRoute(new LoginController(), [`body`], `POST`);
