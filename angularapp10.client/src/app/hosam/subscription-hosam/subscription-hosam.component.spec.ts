import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionHosamComponent } from './subscription-hosam.component';

describe('SubscriptionHosamComponent', () => {
  let component: SubscriptionHosamComponent;
  let fixture: ComponentFixture<SubscriptionHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
