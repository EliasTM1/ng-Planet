import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { MainComponent } from './pages/main/main.component';

// Import the components that you want to use as routes

const routes: Routes = [
  {
    path: 'planet/:name',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: 'planet/mercury',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
