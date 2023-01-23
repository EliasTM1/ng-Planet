import { Planet } from 'src/types/planets.interface';
import { PlanetsService } from './../services/planets-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private planetsService : PlanetsService
  ) { }

  availablePlanets : string[] = [];
  currentColor: string = '';

  ngOnInit(): void {
    this.planetsService.getMockData().forEach((planet: Planet) => {
      this.availablePlanets.push(planet.name.toUpperCase())
    })
    this.planetsService.currentColor.subscribe(e => {
      this.currentColor = e
    })
  }

  setStyles() {
    return {
      'border-top' : `3px ${this.currentColor} solid`
      // 'border-top' : `3px red solid`
    }
  }


}
