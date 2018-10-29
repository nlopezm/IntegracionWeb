import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTarjetaComponent } from './modificar-tarjeta.component';

describe('ModificarTarjetaComponent', () => {
  let component: ModificarTarjetaComponent;
  let fixture: ComponentFixture<ModificarTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
