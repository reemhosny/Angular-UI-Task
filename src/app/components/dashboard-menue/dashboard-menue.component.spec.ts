import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenueComponent } from './dashboard-menue.component';

describe('DashboardMenueComponent', () => {
  let component: DashboardMenueComponent;
  let fixture: ComponentFixture<DashboardMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
