import { ApiError } from './../../models/rest/ApiError';
import { PostService } from './../../services/application/post/post.service';
import { TokenService } from './../../services/cookies/token.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  doneLoading = false;
  uploadedImage: string | ArrayBuffer;
  newPostForm: FormGroup;

  constructor(
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenService: TokenService,
    private postService: PostService,
  ) { }

  async ngOnInit() {
    this.tokenService.redirectIfNoToken();

    this.newPostForm = this.formBuilder.group({
      postdescription: [''],
    });


    this.doneLoading = true;
  }

  onFileChange(event) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = (e) => {
      this.uploadedImage = reader.result;
    };

    reader.readAsDataURL(file);
  }

  async onSubmit() {
    const postdescription = this.newPostForm.value.postdescription;

    if (this.uploadedImage == null || this.uploadedImage === undefined) {
      this.snackbar.open('Je hebt nog geen afbeelding bijgevoegd!', 'Sluiten', {duration: 5000});
      return;
    }

    await this.postService.newPost(this.tokenService.getLoginToken(), this.uploadedImage.toString(), postdescription)
      .then(
        (data) => {
          this.snackbar.open('Je nieuwe post is gedeeld!', 'Sluiten', {duration: 5000});
          this.router.navigateByUrl('/home');
        }
      )
      .catch(
        (error: ApiError) => {
          this.snackbar.open(error.clientMessage, 'Sluiten', {duration: 5000});
        }
      );
  }

  get postdescription() {
    return this.newPostForm.get('postdescription');
  }

}
