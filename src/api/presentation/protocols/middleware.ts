import { NextApiResponse } from 'next';

export interface Middleware<T = any, R = any> {
  handle: (request: T, response?: R) => Promise<any>;
}
