import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarTareaComponent } from './editar-tarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { EditarTareaRoutingModule } from './editar-tarea-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
  
@NgModule({
    imports: [CommonModule, EditarTareaRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbTimepickerModule, JsonPipe],
    declarations: [EditarTareaComponent]
})
export class EditarTareaModule { }