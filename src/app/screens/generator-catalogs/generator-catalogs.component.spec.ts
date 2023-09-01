import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCatalogsScreen } from './generator-catalogs.component';

describe('GeneratorCatalogsScreen', () => {
  let component: GeneratorCatalogsScreen;
  let fixture: ComponentFixture<GeneratorCatalogsScreen>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorCatalogsScreen]
    });
    fixture = TestBed.createComponent(GeneratorCatalogsScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
