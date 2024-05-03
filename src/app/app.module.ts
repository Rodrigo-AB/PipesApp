import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuracion de loicale de la app
import { registerLocaleData } from '@angular/common';
import  ("@angular/common/locales/es-MX").then(module => registerLocaleData(module.default));
import  ("@angular/common/locales/fr-CA").then(module => registerLocaleData(module.default));




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide:  LOCALE_ID,  useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
