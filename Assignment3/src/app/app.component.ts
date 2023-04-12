import { Component } from '@angular/core';
import { Post } from './post/post.model';

import { PostService } from './post/post.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
storedPosts: Post[] = [];

  onPostAdded(post)
  {
    this.storedPosts.push(post);
  }
}
