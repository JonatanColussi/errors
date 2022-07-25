import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class TimeoutError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['504_MESSAGE']);
    this.status = httpStatus.GATEWAY_TIMEOUT;
    this.name = 'TimeoutError';
  }
}
