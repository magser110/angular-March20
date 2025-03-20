import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getWeather(city: string) {
    // Simulating an API response with static data
    return { city, temperature: Math.floor(Math.random() * 30) + 1 };
  }
}
