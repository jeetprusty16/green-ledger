import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTable } from './responsive-table';

describe('ResponsiveTable', () => {
  let component: ResponsiveTable;
  let fixture: ComponentFixture<ResponsiveTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
