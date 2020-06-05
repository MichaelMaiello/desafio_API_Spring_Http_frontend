import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReadComponent } from './event-read.component';

describe('EventReadComponent', () => {
  let component: EventReadComponent;
  let fixture: ComponentFixture<EventReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
