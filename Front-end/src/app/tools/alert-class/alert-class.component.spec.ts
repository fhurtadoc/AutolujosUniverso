import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertClassComponent } from './alert-class.component';

describe('AlertClassComponent', () => {
  let component: AlertClassComponent;
  let fixture: ComponentFixture<AlertClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
