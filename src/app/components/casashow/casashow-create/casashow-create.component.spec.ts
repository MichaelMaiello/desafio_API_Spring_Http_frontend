import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasashowCreateComponent } from './casashow-create.component';

describe('CasashowCreateComponent', () => {
  let component: CasashowCreateComponent;
  let fixture: ComponentFixture<CasashowCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasashowCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasashowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
