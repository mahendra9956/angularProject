import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryApiComponent } from './country-api.component';

describe('CountryApiComponent', () => {
  let component: CountryApiComponent;
  let fixture: ComponentFixture<CountryApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryApiComponent]
    });
    fixture = TestBed.createComponent(CountryApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
