import httpStatus from 'http-status';

export class CustomError extends Error {
  status = httpStatus.BAD_REQUEST;

  constructor(error?: string) {
    super(error || httpStatus['400_MESSAGE']);
    this.name = 'CustomError';
  }
}
