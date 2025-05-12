import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { WeatherYesterdayComponent } from './weather-yesterday/weather-yesterday.component';

@Component({
  selector: 'app-root',
 
  imports: [RouterOutlet, WeatherComponent, WeatherYesterdayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Fundamentals of Angular.js';
  content = 'Hei, olen Marko, ollut pois koulusta muutaman vuoden, koska valitettavasti en ole löytänyt harjoittelupaikka. Hetkellä kuitenkin jatkan opintojani ja toivon valmistuvani!';
}