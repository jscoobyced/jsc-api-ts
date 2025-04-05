import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

export const defaultRoute = (
  request: ExpressRequest,
  response: ExpressResponse,
) => {
  void request;
  response.send('JSC API TypeScript');
};
