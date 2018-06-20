import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {UsuariosServiceProvider} from "../../providers/usuarios-service/usuarios-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _usuariosService: UsuariosServiceProvider, private _alertCtrl: AlertController) {
  }

  efetuaLogin() {
    this._usuariosService.efetuaLogin(this.email, this.senha).subscribe(
      () => {
        this.navCtrl.setRoot(HomePage);
      },
      () => {
        this._alertCtrl.create(
          {
            title: 'Falha no login',
            subTitle: 'Email ou senha incorretos!',
            buttons: [{text: 'Ok'}]
          }
        ).present();
      }
    )
  }
}
