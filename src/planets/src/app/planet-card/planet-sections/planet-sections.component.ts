import { AfterViewInit, Component, ElementRef, EventEmitter, Input,OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets-service.service';
import { AvailableViews } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-sections',
  templateUrl: './planet-sections.component.html',
  styleUrls: ['./planet-sections.component.scss'],
})
export class PlanetSectionsComponent implements OnInit, AfterViewInit, OnChanges {
  constructor(private planetService: PlanetsService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.planetService.currentColor.subscribe(color => {
      console.warn(color);

      this.currentColor = color
    })
  }

  ngAfterViewInit(): void {
  }

  @ViewChildren('button') butonsChildren!: QueryList<ElementRef>;

  @Input() currentColor! : string;
  @Output() userSelection = new EventEmitter<string>()
  availViews = Object.values(AvailableViews);
  currentSelection: string = '';
  currentPlanet : string = ''
  isActive: boolean = false

  ngOnInit(): void {
    this.planetService.currentView.subscribe(view => {
      if (view === '') {
        this.planetService.changeView('overview')
        this.currentSelection = view;
      }
      this.currentSelection = view;
    })
    console.log(this.currentColor, "CURRENT COLOR")
  }

  planets : any = [
    {planet: AvailableViews.Overview , active: true},
    {planet: AvailableViews.Geology , active: false},
    {planet: AvailableViews.Structure , active: false}
  ]

  setCurrentView(view: string) {
    this.userSelection.emit(view)
    this.planetService.changeView(view);
    this.currentSelection = view
    this.butonsChildren.forEach((e: any, index: number) => {
      let temp = e.nativeElement
      temp.classList.remove('active')
      this.planets[index].active = false
    })

    this.planets.forEach((elem: any) => {
      if (elem.planet === view) {
        elem.active = !elem.active
      }
    })
    // this.planetService.currentColor.subscribe(color => {
    //   this.currentColor = color
    // })
  }

  // setActiveBackground()  {
  // }


}
