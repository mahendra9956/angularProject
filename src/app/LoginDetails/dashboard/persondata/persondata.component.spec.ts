import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondataComponent } from './persondata.component';

describe('PersondataComponent', () => {
  let component: PersondataComponent;
  let fixture: ComponentFixture<PersondataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersondataComponent]
    });
    fixture = TestBed.createComponent(PersondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
