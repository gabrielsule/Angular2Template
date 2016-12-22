import { Component } from '@angular/core';
import { usuarioService } from './usuarios/usuarios.service';

@Component({
  selector: 'my-app',
  template: `
    <div><h1>{{pageTitle}}</h1>
        <ng-usuarios></ng-usuarios>
    </div>
    `,
    providers: [ usuarioService ]
})
export class AppComponent { 
  pageTitle: string = `Usuarios en Angular 2`;
}
