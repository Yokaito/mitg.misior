import { BaseError } from './BaseError';

export class AccessLevelNotFound extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      1,
      `Access level not found`,
      `AccessLevelNotFound`,
      paramName,
      details,
      stack,
    );
  }
}
