import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHosamComponent } from './login-hosam.component';

describe('LoginHosamComponent', () => {
  let component: LoginHosamComponent;
  let fixture: ComponentFixture<LoginHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
