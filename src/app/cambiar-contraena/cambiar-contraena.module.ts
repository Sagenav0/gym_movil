import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarContraenaPageRoutingModule } from './cambiar-contraena-routing.module';

import { CambiarContraenaPage } from './cambiar-contraena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarContraenaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CambiarContraenaPage]
})
export class CambiarContraenaPageModule {}
