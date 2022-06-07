import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import responseTime from 'response-time';

export const applyMiddleware =
  (middleware: any) => (request: any, response: any) =>
    new Promise((resolve, reject) => {
      middleware(request, response, (result: any) =>
        result instanceof Error ? reject(result) : resolve(result),
      );
    });

export const getIP = (request: any) =>
  request.ip ||
  request.headers[`x-forwarded-for`] ||
  request.headers[`x-real-ip`] ||
  request.connection.remoteAddress;

export const getRateLimitMiddlewares = ({
  limit = 10,
  windowMs = 60 * 1000,
  delayAfter = Math.round(20 / 2),
  delayMs = 150,
  windowToDelayReset = 10 * 1000,
} = {}) => [
  slowDown({
    keyGenerator: getIP,
    windowMs: windowToDelayReset,
    delayAfter,
    delayMs,
  }),
  rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
  responseTime(),
];
