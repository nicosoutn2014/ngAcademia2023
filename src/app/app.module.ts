import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
import { ComponentePrueba2Component } from './componente-prueba2/componente-prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePruebaComponent,
    ComponentePrueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
