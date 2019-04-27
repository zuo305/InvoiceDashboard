import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPageComponent } from './in-page.component';

describe('InPageComponent', () => {
  let component: InPageComponent;
  let fixture: ComponentFixture<InPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
