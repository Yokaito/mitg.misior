import { BaseError } from './BaseError';

export class ServerError extends BaseError {
  constructor(stack?: string) {
    super(500, `Internal server error`, `ServerError`, undefined, stack, stack);
  }
}
