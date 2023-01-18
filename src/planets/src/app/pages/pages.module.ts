import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsModule } from '../planet-card/planet.module';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PlanetsModule,
    RouterModule
  ]
})
export class PagesModule { }
