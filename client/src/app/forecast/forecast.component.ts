import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DATA_SOURCE: WeatherForecast[] = [
  {date: '', temperatureC: 5, temperatureF: 6, summary: ''},
  {date: '', temperatureC: 6, temperatureF: 7, summary: ''},
  {date: '', temperatureC: 7, temperatureF: 4, summary: ''},
  {date: '', temperatureC: 6, temperatureF: 3, summary: ''}
]

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent {

  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  public forecasts: WeatherForecast[] = [];
  dataSource: WeatherForecast[] = DATA_SOURCE;

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('weatherforecast').subscribe(result => {
      this.forecasts = result;
      this.dataSource = this.forecasts;
    }, error => console.error(error));

  }
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
