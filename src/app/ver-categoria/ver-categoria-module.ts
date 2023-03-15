import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerCategoriaComponent } from './ver-categoria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { VerCategoriaRoutingModule } from './ver-categoria-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

  
@NgModule({
    imports: [CommonModule, VerCategoriaRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, FormsModule, NgbTimepickerModule, JsonPipe, ModalModule],
    declarations: [VerCategoriaComponent]
})
export class VerCategoriaModule { }