import { Component } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignalBindingComponent } from './signal-binding/signal-binding.component';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent, TaskListComponent, UserListComponent, SignalBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
