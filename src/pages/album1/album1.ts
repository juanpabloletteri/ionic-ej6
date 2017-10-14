import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

/**
 * Generated class for the Album1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album1',
  templateUrl: 'album1.html',
})
export class Album1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceMotion: DeviceMotion, public alertCtrl: AlertController) {
    // Get the device current acceleration
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => alert('x: ' + acceleration.x + 'y: ' + acceleration.y),
      (error: any) => console.log(error)
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Album1Page');
  }

}
