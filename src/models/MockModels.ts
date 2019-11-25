import { Privacy } from './Privacy';
import { Post } from './Post';
import { User } from './User';
import { Profile } from './Profile';

export class MockModels {

  userId = 'userId';
  postId = 'postId';

  public getMockUser(): User {
    const user = new User();
    user.firstname = 'Testfirstname';
    user.lastname = 'Testlastname';
    user.userId = this.userId;
    user.username = 'testusername';
    user.profilePicture = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';

    return user;
  }

  public getMockPost(): Post {
    const post = new Post();
    post.postUser = this.getMockUser();
    post.comments = [];
    post.imageContent = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png';
    post.likes = [];
    post.postDate = new Date();
    post.postDescription = 'post description';
    post.postId = this.postId;

    return post;
  }

  public getMockProfile(): Profile {
    const profile = new Profile();
    profile.followers = [];
    profile.following = [];
    profile.profileId = 'profileId';
    profile.profilePosts = [this.getMockPost()];
    profile.profilePrivacy = this.getMockPrivacy();
    profile.profileStatus = 'profile status';
    profile.profileUser = this.getMockUser();

    return profile;
  }

  public getMockPrivacy(): Privacy {
    const privacy = new Privacy();
    privacy.publicProfile = true;

    return privacy;
  }

}
