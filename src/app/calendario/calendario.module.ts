import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { CalendarioRoutingModule } from './calendario-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
  
@NgModule({
    imports: [CommonModule, CalendarioRoutingModule, NgbModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule],
    declarations: [CalendarioComponent]
})
export class CalendarioModule { }