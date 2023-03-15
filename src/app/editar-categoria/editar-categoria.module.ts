import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCategoriaComponent } from './editar-categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { EditarCategoriaRoutingModule } from './editar-categoria-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
  
@NgModule({
    imports: [CommonModule, EditarCategoriaRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbTimepickerModule, JsonPipe],
    declarations: [EditarCategoriaComponent]
})
export class EditarCategoriaModule { }