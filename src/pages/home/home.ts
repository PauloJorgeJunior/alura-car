import { CarrosServiceProvider } from './../../providers/carros-service/carros-service';
import { Carro } from './../../app/modelos/carro';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController, private _http: HttpClient,
              private _loadingCtrl: LoadingController, private _alertCtrl: AlertController,
              private _carrosService: CarrosServiceProvider) {

    let loading = this._loadingCtrl.create({
      content: 'Carregamento dos carros...'
    });

    loading.present();

    this._carrosService.lista()
      .subscribe(
      (carros) => {
        this.carros = carros;
        loading.dismiss();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        loading.dismiss();
        this._alertCtrl.create({
          title: 'Falha na conexão',
          subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde.',
          buttons: [
            { text: 'Ok' }
          ]
        }).present();
      }
      );
  }

}
