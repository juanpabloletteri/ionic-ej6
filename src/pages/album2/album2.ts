import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DeviceMotion } from '@ionic-native/device-motion';

/**
 * Generated class for the Album2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album2',
  templateUrl: 'album2.html',
})
export class Album2Page {

  public cats: Array<Object>;
  private lastX: number;
  private lastY: number;
  private lastZ: number;
  private moveCounter: number = 0;

  tema: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, private DeviceMotion: DeviceMotion) {
    platform.ready().then(() => {
      var subscription = DeviceMotion.watchAcceleration({ frequency: 200 }).subscribe(acc => {
        //console.log(acc);

        if (!this.lastX) {
          this.lastX = acc.x;
          this.lastY = acc.y;
          this.lastZ = acc.z;
          return;
        }

        let deltaX: number, deltaY: number, deltaZ: number;
        deltaX = Math.abs(acc.x - this.lastX);
        deltaY = Math.abs(acc.y - this.lastY);
        deltaZ = Math.abs(acc.z - this.lastZ);

        if (deltaX + deltaY + deltaZ > 3) {
          this.moveCounter++;
        } else {
          this.moveCounter = Math.max(0, --this.moveCounter);
        }

        if (this.moveCounter > 2) {
          //movimiento hacia la derecha
          if (acc.x < 0) {
            //alert("negativo");
            if (this.tema == 4) {
              this.tema = 1;
              return;
            }
            else {
              this.tema++;
              //return;
            }
          }
          //movimiento hacia la izquierda
          else {
            //  alert("positivo") 
            if (this.tema == 1) {
              this.tema = 4;
              return;
            }
            else {
              this.tema--;
              //return;
            }

          }

          this.moveCounter = 0;
        }

        this.lastX = acc.x;
        this.lastY = acc.y;
        this.lastZ = acc.z;

      });
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Album1Page');
  }

}
