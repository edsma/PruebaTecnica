import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-countact-us',
  templateUrl: './form-countact-us.page.html',
  styleUrls: ['./form-countact-us.page.scss'],
})
export class FormCountactUsPage implements OnInit {
  form!:FormGroup ;
  constructor(private formBuilder:FormBuilder) { }

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
    debugger;
    //this.contactUsService.sendEmail(this.form.value);
  }

}
