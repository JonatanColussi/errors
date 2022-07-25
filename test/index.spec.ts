import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import { CustomError, errorHandler, notFoundMiddleware } from '../src';

const mockRequest = {
  path: '/any_path',
};
const mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
};
const mockNext = jest.fn();

describe('errorHandler', () => {
  it('should handle error properly', () => {
    errorHandler(
      new CustomError(),
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNext as NextFunction,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST);
    expect(mockResponse.json).toHaveBeenCalledWith({
      type: 'CustomError',
      message: httpStatus['400_MESSAGE'],
    });
  });

  it('should handle default error properly', () => {
    errorHandler(
      // @ts-ignore
      new Error(),
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      mockNext as NextFunction,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
    expect(mockResponse.json).toHaveBeenCalledWith({
      type: 'Error',
      message: httpStatus['500_MESSAGE'],
    });
  });
});

describe('notFoundMiddleware', () => {
  it('should return not found properly', () => {
    notFoundMiddleware(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
      jest.fn(),
    );

    expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.NOT_FOUND);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: `${mockRequest.path} ${httpStatus['404_MESSAGE']}`,
    });
  });
});
