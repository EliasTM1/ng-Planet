import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSectionsComponent } from './planet-sections.component';

describe('PlanetSectionsComponent', () => {
  let component: PlanetSectionsComponent;
  let fixture: ComponentFixture<PlanetSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
