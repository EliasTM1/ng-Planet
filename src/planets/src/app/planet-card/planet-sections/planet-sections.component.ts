import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets-service.service';
import { AvailableViews } from 'src/types/planets.interface';

@Component({
  selector: 'app-planet-sections',
  templateUrl: './planet-sections.component.html',
  styleUrls: ['./planet-sections.component.scss'],
})
export class PlanetSectionsComponent implements OnInit {

  constructor(
    private planetService: PlanetsService,
    private route: ActivatedRoute
    ) {
    this.setMobile();
    window.addEventListener('resize', () => this.setMobile())
  }

  @ViewChildren('button') butonsChildren!: QueryList<ElementRef>;
  @Input() currentColor! : string;
  @Output() userSelection = new EventEmitter<string>()
  availViews = Object.values(AvailableViews);
  currentSelection: string = '';
  currentPlanet : string = ''
  isActive: boolean = false
  isMobile : boolean = false

  views : any = [
    { planet: AvailableViews.Overview , active: false, screenName: 'overvirew' },
    { planet: AvailableViews.Geology , active: false, screenName: 'internal structure' },
    { planet: AvailableViews.Structure , active: false, screenName: 'surface geology' }
  ]

  setMobile() {
    this.isMobile = window.innerWidth <= 500;
  }

  ngOnInit(): void {
    this.setInitialView()

  }

  setInitialView() {
    this.planetService.currentView.subscribe(view => {
      if (view === '') {
        this.planetService.changeView('overview')
        this.currentSelection = view;
      }
      this.currentSelection = view;
    })

    this.planetService.currentPlanet.subscribe(planet => {
      console.log(planet)
      if (planet === '') {
        this.planetService.changeView('overview')
        this.currentSelection = planet;
      }
      this.currentSelection = planet;
    })

    this.planetService.currentColor.subscribe(color => {
      this.currentColor = color
      this.views.forEach((planet: any, index: number) => {
        index === 0  ? planet.active = true : planet.active = false
      });
    })
  }

  setCurrentView(view: string) {
    this.userSelection.emit(view)
    this.planetService.changeView(view);
    this.currentSelection = view
    this.butonsChildren.forEach((e: any, index: number) => {
      let temp = e.nativeElement
      temp.classList.remove('active')
      this.views[index].active = false
    })

    this.views.forEach((elem: any) => {
      if (elem.planet === view) {
        elem.active = !elem.active
      }
    })
  }

  getSyles(active : boolean) {
    return {'border-bottom': `${active ? `4px ${this.currentColor} solid` : ''}`};
  }

  setStyles(active: boolean) {
    return {
      'background-color' : !this.isMobile && active ? this.currentColor : '',
      'border-bottom': this.isMobile && active ? `3px ${this.currentColor} solid` : ''
    }
  }
}
