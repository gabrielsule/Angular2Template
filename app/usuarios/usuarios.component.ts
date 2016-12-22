import { Component, OnInit } from '@angular/core';
import { IUsuario } from './usuarios';
import { usuarioService } from './usuarios.service';

@Component({
    selector: 'ng-usuarios',
    templateUrl: 'app/usuarios/usuarios.component.html',
    styleUrls: ['app/usuarios/usuarios.component.css']
})
export class usuariosComponent implements OnInit {
    pageTitle: string = 'Usuarios';
    errorMessage: string;

    usuarios: IUsuario[];

    constructor(private _usuarioService: usuarioService) {
    }

    ngOnInit(): void {
        this._usuarioService.getUsuarios()
                .subscribe(usuarios => this.usuarios = usuarios,
                           error => this.errorMessage = <any>error);
    }
}
