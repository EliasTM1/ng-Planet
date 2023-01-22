import { Component, Input, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles/particlesjs-config';
import {
  DataInNumber,
  DataDescription,
  Images,
} from 'src/types/planets.interface';
// import * as particlesJS from 'particles.js';
// declare let particlesJS: any;
@Component({
  selector: 'app-planet-card',
  template: `
    <section class="test">
      <app-planet-media [data]="planetImg" [usrSelection]="currentColor"></app-planet-media>
      <app-planet-info [data]="planetDescription"></app-planet-info>
      <app-planet-sections (userSelection)="usrSelection" [currentColor]="currentColor"></app-planet-sections>
      <app-planet-data [data]="planetData"></app-planet-data>
    </section>
  `,
  styleUrls: ['./planet-card.component.scss'],
})
export class PlanetCardComponent {
  @Input() planetData: DataInNumber[] = [];
  @Input() planetDescription: DataDescription[] = [];
  @Input() planetImg: Images[] = [];
  @Input() currentColor: string = '';
  usrSelection : string = '';
  constructor() {}
}
