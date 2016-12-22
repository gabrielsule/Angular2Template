import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { usuariosComponent }  from './usuarios/usuarios.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, usuariosComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
