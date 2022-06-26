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

/*

  // use login to make login in client tibia

  // To open a modal in client requesting authenticator code
  res.send({
        errorCode: 6,
        errorMessage: `Two-factor token required for authentication`,
      });

  // To open a modal in client requesting email code
  res.send({
        errorCode: 8,
        errorMessage: `Two-factor token required for authentication`,
      });


*/
