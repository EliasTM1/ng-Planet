import {
  Component,
  OnInit,
  Input,
  ɵɵsetComponentScope,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDescription, PlanetInfo } from 'src/types/planets.interface';
import { PlanetsService } from 'src/app/services/planets-service.service';
@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
})
export class PlanetInfoComponent implements OnInit, OnChanges {
  @Input() data: DataDescription[] = [];
  currentData: PlanetInfo[] = [];
  activeSelection: string = '';
  currentPlanet: string = '';

  // * UI
  paragraph: string = '';
  url: string = '';

  constructor(
    private planetService: PlanetsService,
  ) {}

  ngOnChanges(changes: any): void {
    const [currentInfo] = changes.data.currentValue;
    if(!this.currentPlanet || this.currentPlanet !== currentInfo.name) {
      this.activeSelection = 'overview';
      this.paragraph = currentInfo[this.activeSelection].content
      this.url = currentInfo[this.activeSelection].url
    }
    this.currentPlanet = currentInfo.name;
  }



  ngOnInit(): void {
    const planetData: any = this.data[0];
    this.currentPlanet = planetData.name;
    this.paragraph = planetData.overview.content;
    this.activeSelection = 'overview';

    this.planetService.currentView.subscribe((view: string) => {
      const planetData: any = this.data[0];
      this.activeSelection = view;
      this.paragraph = planetData[view].content
      this.update()
    });
  }

  update() {
    const planet = this.data[0]
  }

  filterDate(planetData: DataDescription) {
    const usrSelection =
      planetData?.[this.activeSelection as keyof DataDescription];
  }
}
