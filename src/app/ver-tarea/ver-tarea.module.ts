import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerTareaComponent } from './ver-tarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { VerTareaRoutingModule } from './ver-tarea-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

  
@NgModule({
    imports: [CommonModule, VerTareaRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbTimepickerModule, JsonPipe, ModalModule],
    declarations: [VerTareaComponent]
})
export class VerTareaModule { }