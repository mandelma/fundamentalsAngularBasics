import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-yesterday',
  imports: [],
  templateUrl: './weather-yesterday.component.html',
  styleUrl: './weather-yesterday.component.css'
})
export class WeatherYesterdayComponent {
  @Input() data: string = 'Viileä ja vain 7 astetta!'
}
