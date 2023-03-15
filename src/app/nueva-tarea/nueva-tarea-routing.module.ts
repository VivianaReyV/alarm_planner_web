import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaTareaComponent } from './nueva-tarea.component';

const routes: Routes = [
  {
    path: '',
    component: NuevaTareaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaTareaRoutingModule {}