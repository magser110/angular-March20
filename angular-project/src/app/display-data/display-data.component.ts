import { Component } from '@angular/core';

@Component({
  selector: 'app-display-data',
  imports: [],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {
  userData: {name: string; email: string} | null = null;

  onSubmit(form: any){
    this.userData = form.value;
    form.reset();
  }
}
