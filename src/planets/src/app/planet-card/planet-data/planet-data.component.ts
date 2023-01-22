import { DataInNumber } from 'src/types/planets.interface';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-planet-data',
  templateUrl: './planet-data.component.html',
  styleUrls: ['./planet-data.component.scss']
})
export class PlanetDataComponent  {
  @Input() data : DataInNumber[] = []

  constructor() { }

}
