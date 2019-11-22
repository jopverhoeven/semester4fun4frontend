import { ApiError } from './../rest/ApiError';
export class FollowProfileReturnModel {
  apiError: ApiError;
  following: boolean;
}
