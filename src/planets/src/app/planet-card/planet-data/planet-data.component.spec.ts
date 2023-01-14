import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDataComponent } from './planet-data.component';

describe('PlanetDataComponent', () => {
  let component: PlanetDataComponent;
  let fixture: ComponentFixture<PlanetDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
