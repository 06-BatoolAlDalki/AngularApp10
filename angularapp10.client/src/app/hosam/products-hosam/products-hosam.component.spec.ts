import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHosamComponent } from './products-hosam.component';

describe('ProductsHosamComponent', () => {
  let component: ProductsHosamComponent;
  let fixture: ComponentFixture<ProductsHosamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsHosamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHosamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
