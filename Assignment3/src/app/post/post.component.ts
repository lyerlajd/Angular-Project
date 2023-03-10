import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from "./post.model";

@Component({
  selector:'app-post',
  templateUrl: './post.component.html'
})

export class PostComponent {

  binding: '';
  m_title = '';
  m_description = '';

  @Output() postCreated = new EventEmitter<Post>();
  onAddPost()
  {
    this.m_title = this.binding.slice(0, 30) + '...';
    this.m_description = this.binding;

    const post: Post = {title: this.m_title, description: this.m_description};
    this.postCreated.emit(post);
  }
}
