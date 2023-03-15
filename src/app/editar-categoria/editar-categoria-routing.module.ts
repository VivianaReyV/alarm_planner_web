import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaComponent } from './editar-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: EditarCategoriaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarCategoriaRoutingModule {}