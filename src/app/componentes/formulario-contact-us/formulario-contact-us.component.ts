import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-formulario-contact-us',
  templateUrl: './formulario-contact-us.component.html',
  styleUrls: ['./formulario-contact-us.component.css']
})
export class FormularioContactUsComponent implements OnInit{

  constructor(private formBuilder:FormBuilder,
    private contactUsService: ContactService){}

  form:FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required]
      }],
      lastName: ['',{
        validators: [Validators.required]
      }],
      phone: ['',{
        validators: [Validators.required]
      }],
      email: ['',{
        validators: [Validators.required, Validators.email]
      }],
      legalText: ['',{
        validators: [Validators.required]
      }],
    })
  };


  onSubmit(){
    this.contactUsService.sendEmail(this.form.value);
  }

}
