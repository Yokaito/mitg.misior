import { BaseError } from './BaseError';

export class IdNotFoundError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      6,
      `${paramName} id not found`,
      `IdNotFoundError`,
      paramName,
      details,
      stack,
    );
  }
}
