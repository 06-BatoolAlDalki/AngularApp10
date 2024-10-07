import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRahafComponent } from './cart-rahaf.component';

describe('CartRahafComponent', () => {
  let component: CartRahafComponent;
  let fixture: ComponentFixture<CartRahafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartRahafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartRahafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
