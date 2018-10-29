import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEstablecimientosComponent } from './modificar-establecimientos.component';

describe('ModificarEstablecimientosComponent', () => {
  let component: ModificarEstablecimientosComponent;
  let fixture: ComponentFixture<ModificarEstablecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEstablecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEstablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
