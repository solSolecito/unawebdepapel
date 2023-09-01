import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorProductsScreen } from './gestor-products.component';

describe('GestorProductsScreen', () => {
  let component: GestorProductsScreen;
  let fixture: ComponentFixture<GestorProductsScreen>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorProductsScreen]
    });
    fixture = TestBed.createComponent(GestorProductsScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
