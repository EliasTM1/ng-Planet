import { PlanetsService } from 'src/app/services/planets-service.service';
import { Component, Input, AfterViewInit,} from '@angular/core';
import { Images } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-media',
  templateUrl: './planet-media.component.html',
  styleUrls: ['./planet-media.component.scss'],
})
export class PlanetMediaComponent implements AfterViewInit {
  constructor(private planetService: PlanetsService) {}

  @Input() data: Images[] = [];
  @Input() usrSelection: string = '';
  currentImage: string = '';

  ngAfterViewInit(): void {
    this.planetService.currentView.subscribe((view) => {
      this.currentImage = view;
    });
  }
}
