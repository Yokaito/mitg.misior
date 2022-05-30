import { BaseError } from './BaseError';

export class PermissionDeniedError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      3,
      `Permission denied`,
      `PermissionDeniedError`,
      paramName,
      details,
      stack,
    );
  }
}
