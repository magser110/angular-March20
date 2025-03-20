import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './reset-form.component.html',
  styleUrl: './reset-form.component.css'
})
export class ResetFormComponent {
  userData: {name: string, email: string} | null = null;

  onSubmit(form: any){
    this.userData = form.value;
    form.reset();
  }

  onReset(form: any){
    this.userData = null;
    form.reset();
  }
}
