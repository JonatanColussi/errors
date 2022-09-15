import httpStatus from 'http-status';

import {
  AuthenticationError,
  AuthorizationError,
  BadGatewayError,
  ConflictError,
  CustomError,
  InternalServerError,
  LockedError,
  NotFoundError,
  RequestError,
  ServiceUnavailableError,
  TimeoutError,
  TooManyRequestsError,
  UnprocessableEntityError,
} from '../src/errors';

describe('error', () => {
  it.each([
    [AuthenticationError, httpStatus.UNAUTHORIZED],
    [AuthorizationError, httpStatus.FORBIDDEN],
    [BadGatewayError, httpStatus.BAD_GATEWAY],
    [ConflictError, httpStatus.CONFLICT],
    [CustomError, httpStatus.BAD_REQUEST],
    [InternalServerError, httpStatus.INTERNAL_SERVER_ERROR],
    [LockedError, httpStatus.LOCKED],
    [NotFoundError, httpStatus.NOT_FOUND],
    [RequestError, httpStatus.BAD_REQUEST],
    [ServiceUnavailableError, httpStatus.SERVICE_UNAVAILABLE],
    [TimeoutError, httpStatus.GATEWAY_TIMEOUT],
    [TooManyRequestsError, httpStatus.TOO_MANY_REQUESTS],
    [UnprocessableEntityError, httpStatus.UNPROCESSABLE_ENTITY],
  ])('should create %p error properly with %i status', (ErrorType, status) => {
    const error = new ErrorType('');

    expect(error.name).toBe(error.constructor.name);
    expect(error.status).toBe(status);
    expect(error.message).toBe(httpStatus[`${status}_MESSAGE`]);
  });
});
