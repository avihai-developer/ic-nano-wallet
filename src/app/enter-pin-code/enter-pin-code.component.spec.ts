import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPinCodeComponent } from './enter-pin-code.component';

describe('EnterPinCodeComponent', () => {
  let component: EnterPinCodeComponent;
  let fixture: ComponentFixture<EnterPinCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPinCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPinCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
