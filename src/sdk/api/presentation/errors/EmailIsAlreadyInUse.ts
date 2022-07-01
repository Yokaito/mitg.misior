import { BaseError } from './BaseError';

export class EmailIsAlreadyInUseError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      11,
      `Email is already in use`,
      `EmailIsAlreadyInUseError`,
      paramName,
      details,
      stack,
    );
  }
}
