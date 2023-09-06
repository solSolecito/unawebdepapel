import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderProductsComponent } from './uploader-products.component';

describe('UploaderProductsComponent', () => {
  let component: UploaderProductsComponent;
  let fixture: ComponentFixture<UploaderProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploaderProductsComponent]
    });
    fixture = TestBed.createComponent(UploaderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
