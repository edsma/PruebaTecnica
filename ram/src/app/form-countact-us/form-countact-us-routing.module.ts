import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCountactUsPage } from './form-countact-us.page';

const routes: Routes = [
  {
    path: '',
    component: FormCountactUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCountactUsPageRoutingModule {}
