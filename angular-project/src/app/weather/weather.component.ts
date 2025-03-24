import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  cityName: string = '';
  weather: { city: string; temperature: number } = {city: 'springfield', temperature: 50};

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weather = this.weatherService.getWeather(this.cityName);
  }
}
