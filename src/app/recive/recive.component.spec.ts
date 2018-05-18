import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveComponent } from './recive.component';

describe('ReciveComponent', () => {
  let component: ReciveComponent;
  let fixture: ComponentFixture<ReciveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
