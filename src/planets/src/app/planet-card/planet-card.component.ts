import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  template: `
  <section class="test">
    <app-planet-media></app-planet-media>
    <app-planet-info></app-planet-info>
    <app-planet-sections></app-planet-sections>
    <app-planet-data></app-planet-data>
  </section>
  `,
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
