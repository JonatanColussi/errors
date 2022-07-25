import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class LockedError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['423_MESSAGE']);
    this.status = httpStatus.LOCKED;
    this.name = 'LockedError';
  }
}
