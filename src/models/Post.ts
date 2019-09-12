import { User } from './User';
import { Comment } from './Comment';

export class Post {
  postId: string;
  postDescription: string;
  imageContent: string;
  postUser: User;
  comments: Comment[];
  likes: User[];
  postDate: Date;
}
