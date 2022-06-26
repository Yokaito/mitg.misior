import { clientTibiaRouteAdapter } from '@/sdk/api/main/adapters';

import {
  CacheInfoController,
  BoostedCreatureController,
  EventScheduleController,
  LoginClientController,
} from '@/sdk/api/presentation/controllers/clientTibia';

export default clientTibiaRouteAdapter(
  new CacheInfoController(),
  new BoostedCreatureController(),
  new EventScheduleController(),
  new LoginClientController(),
);
