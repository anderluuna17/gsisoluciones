import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPrincipal } from './screen-principal';

describe('ScreenPrincipal', () => {
  let component: ScreenPrincipal;
  let fixture: ComponentFixture<ScreenPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
