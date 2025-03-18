import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-live-search',
  imports: [CommonModule],
  templateUrl: './live-search.component.html',
  styleUrl: './live-search.component.css'
})
export class LiveSearchComponent {
  searchQuery = signal('');
  names = ['alice', 'bob', 'charlie', 'david', 'eve'];

  get filteredName(){
    return this.names.filter(name => name.toLowerCase().includes(this.searchQuery().toLowerCase()));
  }
}
