import { Component } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignalBindingComponent } from './signal-binding/signal-binding.component';
import { LiveSearchComponent } from './live-search/live-search.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ResetFormComponent } from './reset-form/reset-form.component';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent, TaskListComponent, UserListComponent, SignalBindingComponent, LiveSearchComponent, SimpleFormComponent, DisplayDataComponent, EditDataComponent, ResetFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
