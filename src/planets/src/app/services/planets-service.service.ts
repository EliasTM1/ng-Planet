import { Injectable } from '@angular/core';
import { data } from '../../mocks/data';
import { Planet } from 'src/types/planets.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor() {}
  getMockData(): Planet[] {
    return data;
  }

  localSolarSystem: string[] = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
  ];

  colors: string[] = [
    '#419EBB',
    '#EDA249',
    '#6D2ED5',
    '#D14C32',
    '#D83A34',
    '#CD5120',
    '#1EC1A2',
    '#2D68F0',
  ];

  colorMap: any = this.localSolarSystem.map((name: string, index: number) => {
    return {
      name: name,
      color: this.colors[index],
    };
  });

  private view = new Subject<string>();
  currentView = this.view.asObservable();

  private planet = new Subject<string>();
  currentPlanet = this.planet.asObservable();

  private color = new Subject<string>();
  currentColor = this.color.asObservable();

  changeView(view: string) {
    this.view.next(view);
  }

  changePlanet(planet: string) {
    this.planet.next(planet);
  }

  changeColor(color: string) {
    this.color.next(color);
  }

  getUrlParams(event: any) {
    let planet = event.url.replace('/planet/', '');
    if (!this.solarSystem.includes(planet)) {
      return false;
    }
    this.changePlanet(planet);
    return true;
  }

  get solarSystem() {
    return this.localSolarSystem;
  }

  planetColors(planet: string): string {
    this.colorMap.forEach((config: any) => {
      if (config.name === planet) {
        this.changeColor(config.color);
        return config.color;
      }
    });
    return '';
  }
}
