import { data } from './../../../mocks/data';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ParticlesConfig } from '../../planet-card/particles/particlesjs-config';
import { PlanetsService } from 'src/app/services/planets-service.service';
import {
  DataDescription,
  DataInNumber,
  Images,
  Planet,
} from 'src/types/planets.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import * as particlesJS from 'particles.js';
declare let particlesJS: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private planetService: PlanetsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  data: Planet[] = [];
  private planetDataInp: DataInNumber[] = [];
  private planetInfo: DataDescription[] = [];
  private planetImages: Images[] = [];

  fltdPlanetData: DataInNumber[] = [];
  fltdPlanetInfo: DataDescription[] = [];
  fltdPlanetImg: Images[] = [];
  // * Pass data to child components
  image: string = '';
  currentPlanet: string = '';
  currentView: string = '';

  ngOnInit(): void {
    this.initialSetup();
    this.invokeParticles();
    this.loadMocks();
  }

  initialSetup() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.planetService.changePlanet(event.url.replace('/planet/', ''));
        this.updatePlanet();
      }
    });
    if (this.currentPlanet === '') {
      this.route.params.subscribe((params) => {
        const { id } = params;
        this.currentPlanet = id;
      });
    }
    this.planetService.currentView.subscribe((view) => {
    this.currentView = view;
    });

    this.planetService.currentPlanet.subscribe((planet) => {
      this.currentPlanet = planet;
    });

  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }

  loadMocks() {
    this.data = this.planetService.getMockData();
    this.unpackData();
  }

  unpackData() {
    this.data.forEach((planet: Planet) => {
      const {
        name,
        overview,
        structure,
        geology,
        images,
        radius,
        rotation,
        revolution,
        temperature,
      } = planet;
      const planetData: DataInNumber = {
        name,
        radius,
        rotation,
        revolution,
        temperature,
      };
      const planetDescription: DataDescription = {
        name,
        overview,
        geology,
        structure,
      };
      const planetImages: Images = {
        name,
        geology: images.geology,
        internal: images.internal,
        planet: images.planet,
      };
      this.planetDataInp.push(planetData);
      this.planetInfo.push(planetDescription);
      this.planetImages.push(planetImages);
    });
    this.updatePlanet();
  }

  updatePlanet() {
    this.fltdPlanetData = this.filterData(this.planetDataInp);
    this.fltdPlanetInfo = this.filterData(this.planetInfo);
    this.fltdPlanetImg = this.filterData(this.planetImages);
  }

  filterData(something: any[]) {
    return something.filter(
      (eaPlanet) => eaPlanet.name.toLowerCase() === this.currentPlanet
    );
  }
}
