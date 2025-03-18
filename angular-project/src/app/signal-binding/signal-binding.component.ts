import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-binding',
  imports: [],
  templateUrl: './signal-binding.component.html',
  styleUrl: './signal-binding.component.css'
})
export class SignalBindingComponent {
  nameSignal = signal('');
}
