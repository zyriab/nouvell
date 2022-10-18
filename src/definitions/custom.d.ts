import { Request, Response } from 'express';
import { DecodedToken } from './auth';

export interface Tenant {
  name: string;
}

export interface RequestBody extends Request {
  body: {
    token: DecodedToken;
    isAuth: boolean;
    userId: string;
    username: string;
    userEmail: string;
    tenant: Tenant;
  };
}

export interface ResponseBody<T> extends Response {
  json: Send<T, this>;
}
