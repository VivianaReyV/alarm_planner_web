import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './lista-tareas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { ListaTareasRoutingModule } from './lista-tareas-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
  
@NgModule({
    imports: [CommonModule, ListaTareasRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule],
    declarations: [ListaTareasComponent]
})
export class ListaTareasModule { }