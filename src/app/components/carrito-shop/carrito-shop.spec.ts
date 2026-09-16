import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoShop } from './carrito-shop';

describe('CarritoShop', () => {
  let component: CarritoShop;
  let fixture: ComponentFixture<CarritoShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoShop],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoShop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
