import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasashowCrudComponent } from './casashow-crud.component';

describe('CasashowCrudComponent', () => {
  let component: CasashowCrudComponent;
  let fixture: ComponentFixture<CasashowCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasashowCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasashowCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
