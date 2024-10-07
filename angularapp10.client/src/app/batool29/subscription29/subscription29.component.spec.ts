import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscription29Component } from './subscription29.component';

describe('Subscription29Component', () => {
  let component: Subscription29Component;
  let fixture: ComponentFixture<Subscription29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subscription29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscription29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
