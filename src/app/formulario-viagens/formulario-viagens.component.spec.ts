import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioViagensComponent } from './formulario-viagens.component';

describe('FormularioViagensComponent', () => {
  let component: FormularioViagensComponent;
  let fixture: ComponentFixture<FormularioViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioViagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
