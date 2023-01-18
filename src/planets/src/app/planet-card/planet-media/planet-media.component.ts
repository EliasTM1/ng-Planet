import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-media',
  templateUrl: './planet-media.component.html',
  styleUrls: ['./planet-media.component.scss']
})
export class PlanetMediaComponent implements OnInit {

  @Input() data : Images[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
