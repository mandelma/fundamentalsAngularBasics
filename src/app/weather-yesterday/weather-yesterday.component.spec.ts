import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherYesterdayComponent } from './weather-yesterday.component';

describe('WeatherYesterdayComponent', () => {
  let component: WeatherYesterdayComponent;
  let fixture: ComponentFixture<WeatherYesterdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherYesterdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherYesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
