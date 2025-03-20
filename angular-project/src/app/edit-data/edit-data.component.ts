import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-data.component.html',
  styleUrl: './edit-data.component.css'
})
export class EditDataComponent {
  userData: {name: string, email: string} | null = null;

  onSubmit(form: any){
    this.userData = form.value;
    form.reset();
  }
}
