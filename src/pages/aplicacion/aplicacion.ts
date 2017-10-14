import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  album(num) {
    if (num == 1)
      this.navCtrl.push(Album1Page);
    else if (num == 2)
      console.log("pag2");
    else
      console.log("pag2");
  }

  ionViewDidLoad() {
    //8console.log('ionViewDidLoad AplicacionPage');
  }

}
