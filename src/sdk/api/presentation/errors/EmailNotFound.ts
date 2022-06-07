import { BaseError } from './BaseError';

export class EmailNotFoundError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      10,
      `Email not found`,
      `EmailNotFoundError`,
      paramName,
      details,
      stack,
    );
  }
}
