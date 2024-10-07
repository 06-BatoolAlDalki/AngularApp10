import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHosamComponent } from './nav-bar-hosam.component';

describe('NavBarHosamComponent', () => {
  let component: NavBarHosamComponent;
  let fixture: ComponentFixture<NavBarHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
