import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaTareaComponent } from './nueva-tarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { NuevaTareaRoutingModule } from './nueva-tarea-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
  
@NgModule({
    imports: [CommonModule, NuevaTareaRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbTimepickerModule, JsonPipe],
    declarations: [NuevaTareaComponent]
})
export class NuevaTareaModule { }