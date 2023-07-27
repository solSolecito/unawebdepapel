import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreScreen } from './store-screen.component';

describe('StoreScreen', () => {
  let component: StoreScreen;
  let fixture: ComponentFixture<StoreScreen>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreScreen]
    });
    fixture = TestBed.createComponent(StoreScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
