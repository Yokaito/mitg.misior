import { BaseError } from './BaseError';

export class LoginFailedError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      4,
      `Email or password is invalid`,
      `LoginFailedError`,
      paramName,
      details,
      stack,
    );
  }
}
