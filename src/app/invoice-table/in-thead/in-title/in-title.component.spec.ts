import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTitleComponent } from './in-title.component';

describe('InTitleComponent', () => {
  let component: InTitleComponent;
  let fixture: ComponentFixture<InTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
