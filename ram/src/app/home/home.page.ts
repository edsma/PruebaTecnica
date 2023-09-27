import { Component, OnInit } from '@angular/core';
import { Automovil } from './automovil';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  form!:FormGroup;
  slideOpt ={
    direction: 'vertical',
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  automovil: Automovil[] = [];
  constructor(private formBuilder:FormBuilder,
    private contactUsService: ContactService) {}
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
    this.automovil.push({descripcion: 'Check out the latest deals and offers on our Ranger pickup trucks.', titulo: 'Ford Territory', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard_1318050648/imageComponent/image.imgs.full.high.jpg'});
    this.automovil.push({descripcion: 'Exclusively for Ford owners, Ford Family Guarantee brings a suite of upgraded services and connectivity to your journeys.', titulo: 'Ranger Raptor', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard_1106149612_495755803/imageComponent/image.imgs.full.high.jpg'});
    this.automovil.push({descripcion: 'Access your vehicle information at the palm of your hand.', titulo: 'Ford Mustang', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard/imageComponent/image.imgs.full.high.jpg'});
    this.automovil.push({descripcion: 'Dress up your Next-Gen vehicles with Genuine Ford Accessories and Ford Licensed Accessories.', titulo: 'Ford Explorer', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard_1100075499/imageComponent/image.imgs.full.high.jpg'});

    }



  onSubmit(){
    debugger;
    this.contactUsService.sendEmail(this.form.value);
  }

}
