import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class AuthenticationError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['401_MESSAGE']);
    this.status = httpStatus.UNAUTHORIZED;
    this.name = 'AuthenticationError';
  }
}
