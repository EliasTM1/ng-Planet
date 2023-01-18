import { Injectable } from '@angular/core';
import { data } from '../../mocks/data';
import { Planet } from 'src/types/planets.interface';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor() { }

  private view = new Subject<string>();
  currentView = this.view.asObservable();

  private planet = new Subject<string>();
  currentPlanet = this.planet.asObservable();

  getMockData() : Planet[] {
    return data
  }

  changeView(view : string) {
    this.view.next(view)
  }
  changePlanet(planet : string) {
    this.planet.next(planet)
  }




}
