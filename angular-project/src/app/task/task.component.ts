import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  taskName: string = '';
  tasks: string[] = [];

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask(this.taskName);
    this.taskName = ''; // Clear input field
    this.tasks = this.taskService.getTasks();
  }
}
