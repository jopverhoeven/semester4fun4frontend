import { AddCommentReturnModel } from './../../models/post/comment/AddCommentReturnModel';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiError } from './../../models/rest/ApiError';
import { User } from './../../models/User';
import { AuthenticationService } from './../../services/application/authentication/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from './../../models/Post';
import { PostService } from './../../services/application/post/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  userLiked = false;
  doneLoading = false;
  commentForm: FormGroup;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private snackbar: MatSnackBar,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { }

  async ngOnInit() {

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });

    const postId = this.route.snapshot.paramMap.get('id');

    await this.getPost(postId);

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

    this.doneLoading = true;
  }

  async getPost(postId: string) {
    await this.postService.getPost(postId)
    .then((data) => this.post = data)
    .catch((error) => {
        this.router.navigateByUrl('404');
      }
    );
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

  async onSubmit() {
    if (this.cookieService.check('token')) {
      const token = this.cookieService.get('token');
      const comment = this.commentForm.value.comment;
      const postId = this.post.postId;

      await this.postService
      .addComment(token, postId, comment)
      .then(
        ((data: AddCommentReturnModel) => {
          this.post.comments = data.comments;
        })
      )
      .catch((error: ApiError) => {
        this.snackbar.open(error.clientMessage, 'Sluiten', {duration: 3000});
      });

    } else {
      this.snackbar.open('Log in om te reageren!', 'Sluiten', {duration: 3000});
    }
  }

  get comment() {
    return this.commentForm.get('comment');
  }
}
