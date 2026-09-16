import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteAyuda } from './soporte-ayuda';

describe('SoporteAyuda', () => {
  let component: SoporteAyuda;
  let fixture: ComponentFixture<SoporteAyuda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoporteAyuda],
    }).compileComponents();

    fixture = TestBed.createComponent(SoporteAyuda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
