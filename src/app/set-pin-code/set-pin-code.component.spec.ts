import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPinCodeComponent } from './set-pin-code.component';

describe('SetPinCodeComponent', () => {
  let component: SetPinCodeComponent;
  let fixture: ComponentFixture<SetPinCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPinCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPinCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
