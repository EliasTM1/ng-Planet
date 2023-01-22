import { PlanetsService } from 'src/app/services/planets-service.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Images } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-media',
  templateUrl: './planet-media.component.html',
  styleUrls: ['./planet-media.component.scss']
})
export class PlanetMediaComponent implements AfterViewInit, OnChanges {

  @Input() data : Images[] = []
  @Input() usrSelection : string = '';
  currentImage: string = '';

  constructor(private planetService : PlanetsService) { }

  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes, "CHanges")
  }

  ngAfterViewInit(): void {
    this.planetService.currentView.subscribe(view => {
      this.currentImage = view
    })
    console.log(this.currentImage, "MY BIEW")
    console.log(this.data, "DATA")
  }

}
