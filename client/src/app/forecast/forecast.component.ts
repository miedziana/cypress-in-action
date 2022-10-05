import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent {
  public forecasts: WeatherForecast[] = [];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
