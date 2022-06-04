import http from 'http';
import { apiResolver } from 'next/dist/server/api-utils/node';
import registerHandler from '@/pages/api/status';
import supertest from 'supertest';

jest.setTimeout(10e3);

describe(`Hue`, () => {
  let server: any;

  beforeEach(async () => {
    const requestHandle = (request: any, response: any) =>
      apiResolver(
        request,
        response,
        undefined,
        registerHandler,
        {
          previewModeId: ``,
          previewModeEncryptionKey: ``,
          previewModeSigningKey: ``,
        },
        true,
      );
    server = http.createServer(requestHandle);
  });

  afterEach(() => {
    server.close();
  });

  it(`should return a 200`, async () => {
    await supertest(server)
      .get(`/api/status`)
      .send({ statusId: 4 })
      .expect(200);
  });
});
