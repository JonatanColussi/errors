import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class RequestError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['400_MESSAGE']);
    this.status = httpStatus.BAD_REQUEST;
    this.name = 'RequestError';
  }
}
