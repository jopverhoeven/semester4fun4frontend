import { NewPostSubmitModel } from './../../../models/post/new/NewPostSubmitModel';
import { NewPostReturnModel } from './../../../models/post/new/NewPostReturnModel';
import { AddCommentSubmitModel } from './../../../models/post/comment/AddCommentSubmitModel';
import { AddCommentReturnModel } from './../../../models/post/comment/AddCommentReturnModel';
import { LikePostSubmitModel } from './../../../models/post/likes/LikePostSubmitModel';
import { LikePostReturnModel } from './../../../models/post/likes/LikePostReturnModel';
import { ApiError } from './../../../models/rest/ApiError';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbContextService } from '../../database/db-context.service';
import { Post } from '../../../models/Post';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private httpClient: HttpClient,
    private dbContext: DbContextService
  ) { }

  async getPostsSortedByDate(): Promise<Post[]> {
    let posts: Post[];

    await this.httpClient.get<Post[]>(`${this.dbContext.RestURL}post/sorted/date`)
    .pipe(
      map((data: Post[]) => posts = data)
    ).toPromise();

    return posts;
  }

  async getPost(postId: string): Promise<Post> {
    let post: Post;

    await this.httpClient.get<Post>(`${this.dbContext.RestURL}post/id/${postId}`)
    .pipe(
      map((data: Post) => post = data)
    ).pipe(
      catchError(this.handleError)
    ).toPromise();

    return post;
  }

  async likePost(token: string, postId: string): Promise<LikePostReturnModel> {
    const submitModel: LikePostSubmitModel = new LikePostSubmitModel();
    submitModel.token = token;
    submitModel.postId = postId;

    let returnModel: LikePostReturnModel;

    await this.httpClient.post<LikePostReturnModel>(`${this.dbContext.RestURL}post/like`, submitModel)
    .pipe(
      map((data) => returnModel = data)
    )
    .pipe(
      catchError(this.handleError)
    ).toPromise();

    return returnModel;
  }

  async addComment(token: string, postId: string, comment: any): Promise<AddCommentReturnModel> {
    const submitModel: AddCommentSubmitModel = new AddCommentSubmitModel();
    submitModel.token = token;
    submitModel.postId = postId;
    submitModel.commentContent = comment;

    let returnModel: AddCommentReturnModel;

    await this.httpClient.post<AddCommentReturnModel>(`${this.dbContext.RestURL}post/comment`, submitModel)
    .pipe(
      map((data) => returnModel = data)
    )
    .pipe(
      catchError(this.handleError)
    ).toPromise();

    return returnModel;
  }

  async newPost(token: string, image: string, description: string): Promise<NewPostReturnModel> {
    const submitModel: NewPostSubmitModel = new NewPostSubmitModel;
    submitModel.token = token;
    submitModel.image = image;
    submitModel.description = description;

    let returnModel: NewPostReturnModel;

    await this.httpClient.post<NewPostReturnModel>(`${this.dbContext.RestURL}post/add`, submitModel)
    .pipe(
      map((data) => returnModel = data)
    )
    .pipe(
      catchError(this.handleError)
    ).toPromise();

    return returnModel;
  }

  private handleError(error: HttpErrorResponse) {

    const apiError: ApiError = error.error;

    return throwError(apiError);
  }


}
