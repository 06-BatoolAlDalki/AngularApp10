import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubservicesHosamComponent } from './subservices-hosam.component';

describe('SubservicesHosamComponent', () => {
  let component: SubservicesHosamComponent;
  let fixture: ComponentFixture<SubservicesHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubservicesHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubservicesHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
