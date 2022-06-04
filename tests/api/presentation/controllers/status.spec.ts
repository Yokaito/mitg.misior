import { StatusController } from '@/sdk/api/presentation/controllers';
import Joi, { ObjectSchema } from 'joi';

type SutTypes = {
  sut: StatusController;
  validation: ObjectSchema;
};

const makeSut = (): SutTypes => {
  const validation = Joi.object({
    statusId: Joi.number().integer().greater(3).required(),
  });
  const sut = new StatusController(validation);

  return {
    sut,
    validation,
  };
};

describe(`StatusController`, () => {
  it(`should be defined`, () => {
    const { sut } = makeSut();

    expect(sut).toBeDefined();
  });

  it(`should return 200 on success`, async () => {
    const { sut } = makeSut();

    const request = {
      statusId: 4,
    };
    const httpResponse = await sut.handle(request);

    expect(httpResponse.statusCode).toBe(200);
  });

  it(`should return 200 it same value request`, async () => {
    const { sut } = makeSut();

    const request = {
      statusId: 4,
    };
    const httpResponse = await sut.handle(request);

    expect(httpResponse.body).toEqual({
      value: {
        statusId: 4,
      },
      ok: `status:ok`,
    });
  });

  it(`should return 400 on invalid request`, async () => {
    const { sut } = makeSut();

    const request = {
      statusId: 0,
    };
    const httpResponse = await sut.handle(request);

    expect(httpResponse.statusCode).toBe(400);
  });

  it(`should return 500 on server error`, async () => {
    const { sut, validation } = makeSut();

    const request = {
      statusId: 0,
    };
    jest.spyOn(validation, `validate`).mockImplementationOnce(() => {
      throw new Error(`any error`);
    });
    const httpResponse = await sut.handle(request);

    expect(httpResponse.statusCode).toBe(500);
  });
});
