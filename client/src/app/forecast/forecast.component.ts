import {Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent {

  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {
    this.getForecasts();

  }

  private getForecasts() {
    this.http.get<WeatherForecast[]>('weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  refreshForecast() {
    this.getForecasts();
  }
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
