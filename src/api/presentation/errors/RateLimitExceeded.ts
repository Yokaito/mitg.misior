import { BaseError } from './BaseError';

export class RateLimitExceededError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      5,
      `Rate limit exceeded`,
      `RateLimitExceededError`,
      paramName,
      details,
      stack,
    );
  }
}
