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
import { CardComponent } from './card/card.component';
import { ContentSwitcherComponent } from './content-switcher/content-switcher.component';
import { EventComponent } from './event/event.component';
import { ProductComponent } from './product/product.component';
import { MessageComponent } from './message/message.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TaskComponent } from './task/task.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent, TaskListComponent, UserListComponent, SignalBindingComponent, LiveSearchComponent, SimpleFormComponent, DisplayDataComponent, EditDataComponent, ResetFormComponent, CardComponent, ContentSwitcherComponent, EventComponent,ProductComponent, MessageComponent, ProductListComponent, TaskComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
