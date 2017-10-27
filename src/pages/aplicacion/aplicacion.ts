import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Album1Page } from '../album1/album1';
/**
 * Generated class for the AplicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplicacion',
  templateUrl: 'aplicacion.html',
})
export class AplicacionPage {

  public cats: Array<Object>;
  private lastX: number;
  private lastY: number;
  private lastZ: number;
  private moveCounter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 2000
    });
    loader.present();
  }

  album(num) {
    if (num == 1)
      this.navCtrl.push(Album1Page, { "album": 1 });
    else if (num == 2)
      this.navCtrl.push(Album1Page, { "album": 2 });
    else
      this.navCtrl.push(Album1Page, { "album": 3 });
  }

  ionViewDidLoad() {
    //8console.log('ionViewDidLoad AplicacionPage');
  }

}
