import { Controller } from '@/sdk/api/presentation/protocols';
import { NextApiRequest, NextApiResponse } from 'next';

export const clientTibiaRouteAdapter = (
  CacheInfoController: Controller,
  BoostedCreatureController: Controller,
  EventScheduleController: Controller,
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
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
    }

    res.status(200).json(response);
  };
};
