import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class ServiceUnavailableError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['503_MESSAGE']);
    this.status = httpStatus.SERVICE_UNAVAILABLE;
    this.name = 'ServiceUnavailableError';
  }
}
