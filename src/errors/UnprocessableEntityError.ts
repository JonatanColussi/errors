import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class UnprocessableEntityError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['422_MESSAGE']);
    this.status = httpStatus.UNPROCESSABLE_ENTITY;
    this.name = 'UnprocessableEntityError';
  }
}
