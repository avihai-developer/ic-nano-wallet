import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrivateKeyComponent } from './show-private-key.component';

describe('ShowPrivateKeyComponent', () => {
  let component: ShowPrivateKeyComponent;
  let fixture: ComponentFixture<ShowPrivateKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPrivateKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrivateKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
