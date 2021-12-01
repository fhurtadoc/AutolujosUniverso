import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewproductComponent } from './dialog-newproduct.component';

describe('DialogNewproductComponent', () => {
  let component: DialogNewproductComponent;
  let fixture: ComponentFixture<DialogNewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
