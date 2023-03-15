import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { CategoriasRoutingModule } from './categorias-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
  
@NgModule({
    imports: [CommonModule, CategoriasRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule],
    declarations: [CategoriasComponent]
})
export class CategoriasModule { }