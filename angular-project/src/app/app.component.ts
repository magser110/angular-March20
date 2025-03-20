import { Component } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignalBindingComponent } from './signal-binding/signal-binding.component';
import { LiveSearchComponent } from './live-search/live-search.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent, TaskListComponent, UserListComponent, SignalBindingComponent, LiveSearchComponent, SimpleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
