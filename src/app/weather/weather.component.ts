import { Component } from '@angular/core';


@Component({
  selector: 'app-weather',
  
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  header = 'Päivän sää'
  content = 'Tänään on päivällä 10 astetta lämmitä ja aurinko paistaa!'
}
