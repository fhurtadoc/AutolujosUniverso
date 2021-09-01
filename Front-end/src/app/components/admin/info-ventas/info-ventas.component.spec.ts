import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVentasComponent } from './info-ventas.component';

describe('InfoVentasComponent', () => {
  let component: InfoVentasComponent;
  let fixture: ComponentFixture<InfoVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
