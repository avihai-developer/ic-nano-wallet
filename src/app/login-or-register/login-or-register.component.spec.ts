import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrRegisterComponent } from './login-or-register.component';

describe('LoginOrRegisterComponent', () => {
  let component: LoginOrRegisterComponent;
  let fixture: ComponentFixture<LoginOrRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOrRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
