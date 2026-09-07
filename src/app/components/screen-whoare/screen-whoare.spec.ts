import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenWhoare } from './screen-whoare';

describe('ScreenWhoare', () => {
  let component: ScreenWhoare;
  let fixture: ComponentFixture<ScreenWhoare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenWhoare],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenWhoare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
