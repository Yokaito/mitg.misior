import { Controller } from '@/sdk/api/presentation/protocols';
import { NextApiRequest, NextApiResponse } from 'next';

export const clientTibiaRouteAdapter = (
  CacheInfoController: Controller,
  BoostedCreatureController: Controller,
  EventScheduleController: Controller,
  LoginClientController: Controller,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    let status = 200;
    if (!Object.hasOwn(req.body, `type`)) {
      res.status(400).send({
        error: `Missing type in request body`,
      });
      return;
    }

    const typeRequest = req.body.type;
    let response = {};

    switch (typeRequest) {
      case `cacheinfo`:
        response = await CacheInfoController.handle(req);
        break;
      case `boostedcreature`:
        response = await BoostedCreatureController.handle(req);
        break;
      case `eventschedule`:
        response = await EventScheduleController.handle(req);
        break;
      case `login`:
        response = await LoginClientController.handle(req.body);
        break;
      default:
        status = 400;
        response = {
          error: `Unknown type in request body`,
        };
    }

    res.status(status).json(response);
  };
};
