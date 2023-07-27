import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreen } from './home-screen.component';

describe('HomeScreen', () => {
  let component: HomeScreen;
  let fixture: ComponentFixture<HomeScreen>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScreen]
    });
    fixture = TestBed.createComponent(HomeScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
