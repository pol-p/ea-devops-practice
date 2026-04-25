import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Wraps async Express controllers to automatically catch exceptions
 * and forward them to the global Express error-handling middleware.
 */
export const asyncWrapper = (
  fn: (req: Request<any, any, any, any>, res: Response, next: NextFunction) => Promise<unknown> | unknown
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
