import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = signal([
    {title: 'task 1', completed: true},
    {title: 'task 2', completed: false},
    {title: 'task 3', completed: true}
  ]);

  filter = signal('all');

  get filteredTasks(){
    const filterValue = this.filter();
    if(filterValue === 'completed'){
      return this.tasks().filter(task => task.completed);
    } else if (filterValue === 'pending'){
      return this.tasks().filter(task => !task.completed);
    }
    return this.tasks();
  }

  changeFilter(filterValue: string){
    this.filter.set(filterValue);
  }
}
