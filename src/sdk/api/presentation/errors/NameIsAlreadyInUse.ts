import { BaseError } from './BaseError';

export class NameIsAlreadyInUseError extends BaseError {
  constructor(
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super(
      11,
      `Name is already in use`,
      `NameIsAlreadyInUseError`,
      paramName,
      details,
      stack,
    );
  }
}
