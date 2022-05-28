import { BaseError } from './BaseError';

export class AuthorizationNotFound extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      2,
      `Authorization not found`,
      `AuthorizationNotFound`,
      paramName,
      details,
      stack,
    );
  }
}
