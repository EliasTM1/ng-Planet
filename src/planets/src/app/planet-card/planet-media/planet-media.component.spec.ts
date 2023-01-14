import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetMediaComponent } from './planet-media.component';

describe('PlanetMediaComponent', () => {
  let component: PlanetMediaComponent;
  let fixture: ComponentFixture<PlanetMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
