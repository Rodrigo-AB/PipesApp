import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';


//Este modulo lo estamos creando para importar aqui todos los modulos de los componentes que estaremos utilizando. Al final de cuentas vamos a mejorar la legibilidad de nuestro codigo

@NgModule({
  exports:  [
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
