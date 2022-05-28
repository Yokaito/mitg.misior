export interface Middleware<T = any> {
  handle: (request: T) => Promise<any>;
}
