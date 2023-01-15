import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles/particlesjs-config';
// import * as particlesJS from 'particles.js';
declare let particlesJS: any
@Component({
  selector: 'app-planet-card',
  template: `
    <section class="test">
      <!-- <div id="particles-js"></div> -->
      <app-planet-media></app-planet-media>
      <app-planet-info></app-planet-info>
      <app-planet-sections></app-planet-sections>
      <app-planet-data></app-planet-data>
    </section>
  `,
  styleUrls: ['./planet-card.component.scss'],
})
export class PlanetCardComponent {
  constructor() {}

  // ngOnInit(): void {
  // this.invokeParticles()
  // }

  // invokeParticles(): void {
  //   particlesJS('particles-js', ParticlesConfig, function() {});
  // }
}
