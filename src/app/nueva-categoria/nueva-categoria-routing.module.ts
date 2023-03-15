import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaCategoriaComponent } from './nueva-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: NuevaCategoriaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaCategoriaRoutingModule {}