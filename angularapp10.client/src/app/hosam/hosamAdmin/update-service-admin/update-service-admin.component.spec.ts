import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceAdminComponent } from './update-service-admin.component';

describe('UpdateServiceAdminComponent', () => {
  let component: UpdateServiceAdminComponent;
  let fixture: ComponentFixture<UpdateServiceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateServiceAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
