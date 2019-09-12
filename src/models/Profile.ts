import { Privacy } from './Privacy';
import { User } from './User';
import { Post } from './Post';
export class Profile {
  profileId: string;
  profileUser: User;
  followers: User[];
  following: User[];
  profilePosts: Post[];
  profilePrivacy: Privacy;
}
