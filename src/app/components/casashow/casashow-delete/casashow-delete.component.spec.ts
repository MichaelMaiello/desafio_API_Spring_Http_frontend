import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasashowDeleteComponent } from './casashow-delete.component';

describe('CasashowDeleteComponent', () => {
  let component: CasashowDeleteComponent;
  let fixture: ComponentFixture<CasashowDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasashowDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasashowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
