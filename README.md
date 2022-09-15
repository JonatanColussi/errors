# @colussi/errors

[![npm version](https://badge.fury.io/js/@colussi%2Ferrors.svg)](https://badge.fury.io/js/@colussi%2Ferrors) [![CI](https://github.com/JonatanColussi/errors/actions/workflows/main.yml/badge.svg?event=workflow_dispatch)](https://github.com/JonatanColussi/errors/actions/workflows/main.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/2453be2c7b55aae07a5b/maintainability)](https://codeclimate.com/github/JonatanColussi/errors/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/2453be2c7b55aae07a5b/test_coverage)](https://codeclimate.com/github/JonatanColussi/errors/test_coverage)

## Install

```sh
$ npm install --save-dev @colussi/errors
```

### Errors

Errors exposed in this package extends the Error class, and have a `status` property containing the HTTP equivalent status. The error message defaults to a description of the HTTP status.

| Name | Status Code | Status Name | Parameters |
| --- | --- | --- | --- |
| AuthenticationError | 401 | UNAUTHORIZED | message |
| AuthorizationError | 403 | FORBIDDEN | message |
| BadGatewayError | 502 | BAD_GATEWAY | message |
| ConflictError | 409 | CONFLICT | message |
| CustomError | 400 | BAD_REQUEST | message |
| InternalServerError | 500 | INTERNAL_SERVER_ERROR | message |
| LockedError | 423 | LOCKED | message |
| NotFoundError | 404 | NOT_FOUND | message |
| RequestError | 400 | BAD_REQUEST | message |
| ServiceUnavailableError | 503 | SERVICE_UNAVAILABLE | message |
| TimeoutError | 504 | GATEWAY_TIMEOUT | message |
| TooManyRequestsError | 429 | TOO_MANY_REQUESTS | message |
| UnprocessableEntityError | 422 | UNPROCESSABLE_ENTITY | message |

### example

```typescript
if (!product) {
  throw new NotFoundError('Product not found');
}
```

results in
```
[404] {
  "type": "NotFoundError",
  "message": "Product not found"
}
```

### Middlewares

- The middleware `notFoundMiddleware` will handle the error and respond to the request in a standardized way.

- The `notFoundMiddleware` middleware will respond to all routes that are not specified

To use in an express application, register the middlewares after the routes:

```typescript
import Express from 'express';
import { errorHandler, notFoundMiddleware } from '@colussi/errors';

const app = new Express();

app.use(...); // your routes

app.use(errorHandler);
app.all('*', notFoundMiddleware);
```
