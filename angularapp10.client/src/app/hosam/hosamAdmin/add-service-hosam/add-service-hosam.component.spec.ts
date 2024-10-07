import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceHosamComponent } from './add-service-hosam.component';

describe('AddServiceHosamComponent', () => {
  let component: AddServiceHosamComponent;
  let fixture: ComponentFixture<AddServiceHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddServiceHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
