import httpStatus from 'http-status';

import { CustomError } from './CustomError';

export class ConflictError extends CustomError {
  constructor(error?: string) {
    super(error || httpStatus['409_MESSAGE']);
    this.status = httpStatus.CONFLICT;
    this.name = 'ConflictError';
  }
}
