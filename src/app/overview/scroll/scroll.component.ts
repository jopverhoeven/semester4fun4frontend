import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  currentPost = 1;

  constructor() { }

  ngOnInit() {
  }

  scrollNext(element: HTMLElement) {
    const postCount = document.getElementById('overviewparent').children.length;
    const nextPost = document.getElementById('overviewparent').children.item(this.currentPost);

    this.currentPost++;

    console.log(nextPost);

    if (this.currentPost < postCount) {
      nextPost.scrollIntoView();
    }
  }

}
