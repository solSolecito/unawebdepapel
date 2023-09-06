import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLiComponent } from './product-li.component';

describe('ProductLiComponent', () => {
  let component: ProductLiComponent;
  let fixture: ComponentFixture<ProductLiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductLiComponent]
    });
    fixture = TestBed.createComponent(ProductLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
