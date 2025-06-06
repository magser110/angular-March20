import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {
  userData: {name: string, email: string} | null = null;

  onSubmit(form: any){
    this.userData = form.value;
    form.reset();
  }
}
