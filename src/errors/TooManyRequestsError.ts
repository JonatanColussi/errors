import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class TooManyRequestsError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['429_MESSAGE']);
    this.status = httpStatus.TOO_MANY_REQUESTS;
    this.name = 'TooManyRequestsError';
  }
}
