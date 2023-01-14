import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from './services/planets-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'planets';
  constructor (private planetsService : PlanetsServiceService) {

  }

  ngOnInit () {
    let somethign = this.planetsService.getMockData()
    console.log(somethign)
  }
}
