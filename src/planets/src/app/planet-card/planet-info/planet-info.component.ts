import { Component, OnInit, Input } from '@angular/core';
import { DataDescription } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  @Input() data : DataDescription[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
