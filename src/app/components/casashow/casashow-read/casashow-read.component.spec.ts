import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasashowReadComponent } from './casashow-read.component';

describe('CasashowReadComponent', () => {
  let component: CasashowReadComponent;
  let fixture: ComponentFixture<CasashowReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasashowReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasashowReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
