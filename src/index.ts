import { ErrorRequestHandler, RequestHandler } from 'express';
import httpStatus from 'http-status';

export * from './errors';

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || httpStatus['500_MESSAGE'];
  const { name } = error;

  return res.status(status).json({ type: name, message });
};

export const notFoundMiddleware: RequestHandler = (req, res) => {
  const status = httpStatus.NOT_FOUND;
  const message = `${req.path} ${httpStatus['404_MESSAGE']}`;

  return res.status(status).json({ message });
};
