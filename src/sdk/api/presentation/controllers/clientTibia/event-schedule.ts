import { Controller } from '../../protocols';
import convertXML from 'xml-js';
import fs from 'fs';
import path from 'path';
import { convertToUnixTime } from '@/sdk/utils/date-format';

export class EventScheduleController implements Controller {
  async handle(): Promise<any> {
    const data = fs.readFileSync(
      path.join(process.cwd(), `datapack`, `XML`, `events.xml`),
    );

    const xmlConverted: any = convertXML.xml2js(data.toString(), {
      compact: true,
    });

    const dataToSendToClient: any = {
      eventlist: [],
      lastupdatetimestamp: Math.round(new Date().getTime() / 1000),
    };

    xmlConverted?.events.event.forEach((event: any) => {
      const eventToSend = {
        colorlight: event.colors._attributes.colorlight,
        colordark: event.colors._attributes.colordark,
        description: event.description._attributes.description,
        displaypriority: parseInt(event.details._attributes.displaypriority),
        enddate: convertToUnixTime(event._attributes.enddate),
        isseasonal:
          parseInt(event.details._attributes.isseasonal) === 0 ? false : true,
        name: event._attributes.name,
        specialevent:
          parseInt(event.details._attributes.specialevent) === 0 ? false : true,
        startdate: convertToUnixTime(event._attributes.startdate),
      };

      dataToSendToClient.eventlist.push(eventToSend);
    });

    return dataToSendToClient;
  }
}

export default EventScheduleController;
