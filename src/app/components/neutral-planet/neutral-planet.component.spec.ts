import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralPlanetComponent } from './neutral-planet.component';

describe('NeutralPlanetComponent', () => {
  let component: NeutralPlanetComponent;
  let fixture: ComponentFixture<NeutralPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeutralPlanetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeutralPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
