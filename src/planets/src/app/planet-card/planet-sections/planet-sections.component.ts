import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets-service.service';
import { AvailableViews } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-sections',
  templateUrl: './planet-sections.component.html',
  styleUrls: ['./planet-sections.component.scss'],
})
export class PlanetSectionsComponent implements OnInit {
  constructor(private planetService: PlanetsService, private router: Router) {}

  availViews = Object.values(AvailableViews);
  currentSelection: string = '';
  currentPlanet : string = ''

  ngOnInit(): void {
    this.planetService.currentPlanet.subscribe(e => {

    })
  }

  setCurrentView(view: string) {
    // TODO: Finish section navigation
    // this.router.navigate(['/planet', this.currentPlanet, '/view', this.currentSelection]);
    // this.planetService.changeView(view);
  }
}
