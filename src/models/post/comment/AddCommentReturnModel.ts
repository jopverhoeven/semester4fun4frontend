import { ApiError } from './../../rest/ApiError';
import { Comment } from '../../Comment';
export class AddCommentReturnModel {
  comments: Comment[];
  apiError: ApiError;
}
