import { Agendamento } from './../../app/modelos/agendamento';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AgendamentosServiceProvider {

  private _url = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) {

  }

  agenda(agendamento: Agendamento) {
    return this._http
        .post(this._url + '/carro/listaTodos', agendamento)
        .do(() => agendamento.enviado = true)
        .catch((err)=> Observable.of(new Error('Falha no agendamento! Tente novamente mais tarde!')));
  }

}
