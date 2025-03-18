import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = signal([
    { name: 'terry', avatar: 'some pic', status: 'active'},
    { name: 'nelly', avatar: 'random pic', status: 'offline'},
    { name: 'benito', avatar: 'pic', status: 'offline'}
  ]);
}
