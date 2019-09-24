import { CookieService } from 'ngx-cookie-service';
import { User } from './../../../models/User';
import { AuthenticationService } from './../../../services/application/authentication/authentication.service';
import { Post } from './../../../models/Post';
import { PostService } from './../../../services/application/post/post.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private postService: PostService,
    private authService: AuthenticationService,
    private cookieService: CookieService
  ) { }

  doneLoading = false;
  posts: Post[];
  user: User = null;

  async ngOnInit() {

    await this.getPosts();
    await this.getUser();

    this.doneLoading = true;
  }

  async getUser() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      await this.authService.loginWithToken(token)
      .then((data) => this.user = data);
    }
  }

  async getPosts() {
    await this.postService.getPostsSortedByDate().then(
      (data) => {
        this.posts = data;
      }
    );
  }

}
