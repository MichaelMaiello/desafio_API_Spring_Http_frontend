import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasashowUpdateComponent } from './casashow-update.component';

describe('CasashowUpdateComponent', () => {
  let component: CasashowUpdateComponent;
  let fixture: ComponentFixture<CasashowUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasashowUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasashowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
