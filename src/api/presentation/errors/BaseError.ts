export class BaseError extends Error {
  constructor(
    public codeError: number,
    public message: string,
    public name: string,
    public paramName?: string,
    public details?: string,
    public stack?: string,
  ) {
    super();
    this.name = name;
    this.stack = stack;
  }
}
