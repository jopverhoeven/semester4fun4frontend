import { User } from './../../../models/User';
import { AuthenticationService } from './../../../services/application/authentication/authentication.service';
import { ApiError } from './../../../models/rest/ApiError';
import { PostService } from './../../../services/application/post/post.service';
import { CookieService } from 'ngx-cookie-service';
import { Post } from './../../../models/Post';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-overviewpost',
  templateUrl: './overviewpost.component.html',
  styleUrls: ['./overviewpost.component.css']
})
export class OverviewpostComponent implements OnInit {

  @Input() post: Post;

  userLiked = false;

  constructor(
    private cookieService: CookieService,
    private postService: PostService,
    private snackbar: MatSnackBar,
    private authService: AuthenticationService,
  ) { }


  async ngOnInit() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      let user: User;

      await this.authService.loginWithToken(token)
      .then(
        (data) => user = data
      );

      this.post.likes.forEach(element => {
        if (element.userId === user.userId) {
          this.userLiked = true;
        }
      });
    }
  }

  async likePost() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');

      await this.postService.likePost(token, this.post.postId)
      .then((data) => {
        this.post.likes = data.likes;
        this.userLiked = !this.userLiked;
      })
      .catch((error: ApiError) => this.snackbar.open(error.clientMessage, 'Sluiten', {duration: 3000}));
    } else {
      this.snackbar.open('Je moet eerst inloggen om te liken.', 'Sluiten', {duration: 3000});
    }
  }
}
