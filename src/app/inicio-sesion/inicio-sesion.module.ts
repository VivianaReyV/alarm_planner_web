import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion.component';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
  
@NgModule({
    imports: [CommonModule, InicioSesionRoutingModule],
    declarations: [InicioSesionComponent]
})
export class InicioSesionModule { }