import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class AuthorizationError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['403_MESSAGE']);
    this.status = httpStatus.FORBIDDEN;
    this.name = 'AuthorizationError';
  }
}
