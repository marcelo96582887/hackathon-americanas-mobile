import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { AddUsuarioPageRoutingModule } from './addUsuario-routing.module';
import { AddUsuarioPage } from './addUsuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    AddUsuarioPageRoutingModule
  ],
  declarations: [AddUsuarioPage]
})
export class AddUsuarioPageModule {}
