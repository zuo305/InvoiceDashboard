import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTbodyComponent } from './in-tbody.component';

describe('InTbodyComponent', () => {
  let component: InTbodyComponent;
  let fixture: ComponentFixture<InTbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
