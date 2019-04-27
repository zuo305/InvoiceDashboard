import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheadComponent } from './in-thead.component';

describe('InTheadComponent', () => {
  let component: InTheadComponent;
  let fixture: ComponentFixture<InTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
