import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class NotFoundError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['404_MESSAGE']);
    this.status = httpStatus.NOT_FOUND;
    this.name = 'NotFoundError';
  }
}
