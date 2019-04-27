import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InCellComponent } from './in-cell.component';

describe('InCellComponent', () => {
  let component: InCellComponent;
  let fixture: ComponentFixture<InCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
