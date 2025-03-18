import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  title = signal('post title');
  content = signal('this is post content');

  changeContent() {
    this.content.set('content updated');
  }
}
