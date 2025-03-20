import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-switcher',
  imports: [CommonModule],
  templateUrl: './content-switcher.component.html',
  styleUrl: './content-switcher.component.css'
})
export class ContentSwitcherComponent {
  isOptionOne = true;

  toggleContent() {
    this.isOptionOne = !this.isOptionOne;
  }
}
