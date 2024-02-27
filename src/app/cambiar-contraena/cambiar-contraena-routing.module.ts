import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarContraenaPage } from './cambiar-contraena.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarContraenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarContraenaPageRoutingModule {}
