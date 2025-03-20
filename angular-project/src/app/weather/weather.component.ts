import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  cityName: string;
  weather: { city: string; temperature: number };

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weather = this.weatherService.getWeather(this.cityName);
  }
}
