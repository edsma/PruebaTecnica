import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/Modelos/Automoviles';

@Component({
  selector: 'app-slides-images',
  templateUrl: './slides-images.component.html',
  styleUrls: ['./slides-images.component.css']
})
export class SlidesImagesComponent implements OnInit {
  slideIndex = 1;
  automovil: Automovil[] = [];
  constructor(){

  }
  ngOnInit(): void {
  this.automovil.push({descripcion: 'Check out the latest deals and offers on our Ranger pickup trucks.', titulo: 'Ford Territory', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard_1318050648/imageComponent/image.imgs.full.high.jpg'});
  this.automovil.push({descripcion: 'Exclusively for Ford owners, Ford Family Guarantee brings a suite of upgraded services and connectivity to your journeys.', titulo: 'Ranger Raptor', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard_1106149612_495755803/imageComponent/image.imgs.full.high.jpg'});
  this.automovil.push({descripcion: 'Access your vehicle information at the palm of your hand.', titulo: 'Ford Mustang', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard/imageComponent/image.imgs.full.high.jpg'});
  this.automovil.push({descripcion: 'Dress up your Next-Gen vehicles with Genuine Ford Accessories and Ford Licensed Accessories.', titulo: 'Ford Explorer', urlImagen:'https://www.ford.com.ph/content/ford/ph/en_ph/site-wide-content/billboard-carousels/home-page-carousel/jcr:content/par/billboard_1100075499/imageComponent/image.imgs.full.high.jpg'});

  }

  ngAfterViewInit(): void{
    this.showSlides(0);
  }

   plusSlides(n:number) {
    this.showSlides(this.slideIndex += n);
  }

   currentSlide(n:number) {
    this.showSlides(this.slideIndex = n);
  }

   showSlides(n:number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      let position = slides[i] as HTMLElement;
      position.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    let position = slides[this.slideIndex-1] as HTMLElement;
    if(position != undefined){
      position.style.display = "contents";
      dots[this.slideIndex-1].className += " active";
    }

  }

}
