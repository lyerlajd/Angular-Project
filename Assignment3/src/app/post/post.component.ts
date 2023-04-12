import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from "./post.model";
import { PostService } from "./post.services";

@Component({
  selector:'app-post',
  templateUrl: './post.component.html'
})

export class PostComponent {

  binding: '';
  m_title = '';
  m_description = '';

  //@Output() postCreated = new EventEmitter<Post>();
  constructor(public postsService: PostService){}


  onAddPost(form: NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    /*
    if (form.invalid)
    {
      if (title.invalid) { getErrorMessage("Title is invalid."); }
      if (content.invalid) { getErrorMessage("Content is invalid."); }
      return;
    } */

    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content};
    // this.postCreated.emit(post);

    this.postsService.addPost(form.value.title, form.value.content);
  }

  getErrorMessage(errorMessage)
  {
    return errorMessage;
  }
}
