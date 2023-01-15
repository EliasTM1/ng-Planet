
import { Component, OnInit } from '@angular/core';
// import * as particlesJS from 'particles.js';

@Component({
  selector: 'app-planet-card',
  template: `
  <section class="test">
  <div id="particles-js"></div>
    <app-planet-media></app-planet-media>
    <app-planet-info></app-planet-info>
    <app-planet-sections></app-planet-sections>
    <app-planet-data></app-planet-data>
  </section>
  `,
  styleUrls: [
    './planet-card.component.scss',
]
})
export class PlanetCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //

}

}
