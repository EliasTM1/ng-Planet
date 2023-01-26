import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Planet } from 'src/types/planets.interface';
import { PlanetsService } from './../services/planets-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private planetsService: PlanetsService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
    ) {
      this.setMobile()
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.toggleMenu()
        }
      });
    }

  availablePlanets: string[] = [];
  currentColor: string = '';
  currentPlanet: string = '';
  isMenuOpen: boolean = false;
  colorMap: any = [];
  isMobile : boolean = false

  ngOnInit(): void {
    this.planetsService.getMockData().forEach((planet: Planet) => {
      this.availablePlanets.push(planet.name.toUpperCase());
    });
    this.planetsService.currentColor.subscribe((e) => {
      this.currentColor = e;
    });
    this.planetsService.currentPlanet.subscribe((e) => {
      this.currentPlanet = e;
    });

    this.colorMap = this.planetsService.colorMap;
  }

  setMobile() {
    this.isMobile = window.innerWidth <= 500
  }

  setStyles(index: number) {
    return {
      'background-color': this.planetsService.colorMap[index].color,
      'color': this.planetsService.colorMap[index].color,
    };
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if(this.isMenuOpen) {
      this.renderer.listen('document', 'click', event => {
        if (!this.elementRef.nativeElement.contains(event.target)) {
          this.isMenuOpen = false
        }
      })
    }
  }
}
