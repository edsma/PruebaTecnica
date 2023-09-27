import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCountactUsPageRoutingModule } from './form-countact-us-routing.module';

import { FormCountactUsPage } from './form-countact-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCountactUsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormCountactUsPage]
})
export class FormCountactUsPageModule {}
