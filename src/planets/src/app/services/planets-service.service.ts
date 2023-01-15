import { Injectable } from '@angular/core';
import { data } from '../../mocks/data';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor() { }

  getMockData() {
    return data
  }
}
