import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './services/planets-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'planets';
  constructor () {

  }

  ngOnInit () {

  }
}
