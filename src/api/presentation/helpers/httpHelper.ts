import { ServerError } from '../errors';
import { HttpResponse } from '../protocols';

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error,
});
