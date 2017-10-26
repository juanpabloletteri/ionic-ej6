import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DeviceMotion } from '@ionic-native/device-motion';
import { Album1Page } from '../album1/album1';
import { Album2Page } from '../album2/album2';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, private DeviceMotion: DeviceMotion) {

  }

  album(num) {
    if (num == 1)
      this.navCtrl.push(Album1Page);
    else if (num == 2)
    this.navCtrl.push(Album2Page);
    else
      console.log("pag2");
  }

  ionViewDidLoad() {
    //8console.log('ionViewDidLoad AplicacionPage');
  }

}
