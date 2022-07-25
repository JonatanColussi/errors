import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class BadGatewayError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['502_MESSAGE']);
    this.status = httpStatus.BAD_GATEWAY;
    this.name = 'BadGatewayError';
  }
}
