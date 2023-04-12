import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { PostService } from "../post/post.services";
import { Post } from "../post/post.model";

@Component({
  selector:'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: "post 1", description: "this is text from post 1"},
  //   {title: "post 2", description: "this is text from post 2"},
  //   {title: "post 3", description: "this is text from post 3"}
  // ];
  posts : Post[] = [];
  private postsSub : Subscription;

  constructor(public postsService : PostService) {}

  ngOnInit() : void
  {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts : Post[]) => {this.posts = posts;});
  }

  ngOnDestroy(): void
  {
    this.postsSub.unsubscribe();
  }
}
