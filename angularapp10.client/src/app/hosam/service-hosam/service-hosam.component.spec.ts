import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHosamComponent } from './service-hosam.component';

describe('ServiceHosamComponent', () => {
  let component: ServiceHosamComponent;
  let fixture: ComponentFixture<ServiceHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
