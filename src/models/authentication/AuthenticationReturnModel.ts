import { ApiError } from './../rest/ApiError';
export class AuthenticationReturnModel {
  token: string;
  apiError: ApiError;
}
