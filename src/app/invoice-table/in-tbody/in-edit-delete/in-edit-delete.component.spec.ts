import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InEditDeleteComponent } from './in-edit-delete.component';

describe('InEditDeleteComponent', () => {
  let component: InEditDeleteComponent;
  let fixture: ComponentFixture<InEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InEditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
