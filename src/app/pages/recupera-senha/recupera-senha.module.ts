import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaSenhaPageRoutingModule } from './recupera-senha-routing.module';

import { RecuperaSenhaPage } from './recupera-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaSenhaPageRoutingModule
  ],
  declarations: [RecuperaSenhaPage]
})
export class RecuperaSenhaPageModule {}
