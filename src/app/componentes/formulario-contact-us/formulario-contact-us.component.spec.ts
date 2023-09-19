import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContactUsComponent } from './formulario-contact-us.component';

describe('FormularioContactUsComponent', () => {
  let component: FormularioContactUsComponent;
  let fixture: ComponentFixture<FormularioContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
