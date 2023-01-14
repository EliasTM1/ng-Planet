import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetCardComponent } from './planet-card.component';
import { PlanetMediaComponent } from './planet-media/planet-media.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { PlanetSectionsComponent } from './planet-sections/planet-sections.component';
import { PlanetDataComponent } from './planet-data/planet-data.component';



@NgModule({
  declarations: [
    PlanetCardComponent,
    PlanetMediaComponent,
    PlanetInfoComponent,
    PlanetSectionsComponent,
    PlanetDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanetCardComponent,
  ]
})
export class PlanetsModule { }
