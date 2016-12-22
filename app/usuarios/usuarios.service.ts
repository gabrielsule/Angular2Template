import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUsuario } from './usuarios';

@Injectable()
export class usuarioService {
    private _usuarioUrl = 'api/data.json';

    constructor(private _http: Http) {}

    getUsuarios(): Observable<IUsuario[]> {
        return this._http.get(this._usuarioUrl)
            .map((response: Response) => <IUsuario[]> response.json())
            .do(data => console.log( JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
