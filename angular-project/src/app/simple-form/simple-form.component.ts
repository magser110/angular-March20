import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {
  submittedData: {name: string; email: string} | null = null;

  onSubmit(form: any) {
    this.submittedData = form.value;
    form.reset();
  }
}
