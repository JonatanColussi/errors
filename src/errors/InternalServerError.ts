import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class InternalServerError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['500_MESSAGE']);
    this.status = httpStatus.INTERNAL_SERVER_ERROR;
    this.name = 'InternalServerError';
  }
}
