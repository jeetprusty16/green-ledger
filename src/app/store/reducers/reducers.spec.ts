import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reducers } from './reducers';

describe('Reducers', () => {
  let component: Reducers;
  let fixture: ComponentFixture<Reducers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reducers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reducers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
