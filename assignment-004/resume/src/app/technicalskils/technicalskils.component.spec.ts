import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalskilsComponent } from './technicalskils.component';

describe('TechnicalskilsComponent', () => {
  let component: TechnicalskilsComponent;
  let fixture: ComponentFixture<TechnicalskilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalskilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
