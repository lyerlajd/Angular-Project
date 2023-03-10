import { Component, Input } from "@angular/core";
import { Post } from "../post/post.model";

@Component({
  selector:'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent {
  // posts = [
  //   {title: "post 1", description: "this is text from post 1"},
  //   {title: "post 2", description: "this is text from post 2"},
  //   {title: "post 3", description: "this is text from post 3"}
  // ];
  @Input() posts: Post[]=[];
}
