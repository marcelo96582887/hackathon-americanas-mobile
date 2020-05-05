import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUsuarioPage } from './addUsuario.page';

const routes: Routes = [
  {
    path: '',
    component: AddUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUsuarioPageRoutingModule {}
