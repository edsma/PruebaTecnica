import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlidesImagesComponent } from './componentes/slides-images/slides-images.component';
import { CardDecksComponent } from './componentes/card-decks/card-decks.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormularioContactUsComponent } from './componentes/formulario-contact-us/formulario-contact-us.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ContactService } from './componentes/formulario-contact-us/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    SlidesImagesComponent,
    CardDecksComponent,
    FooterComponent,
    FormularioContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
