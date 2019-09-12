import { ApiError } from './../../rest/ApiError';
import { User } from './../../User';
export class LikePostReturnModel {
  likes: User[];
  apiError: ApiError;
}
