import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AplicacionPage } from '../pages/aplicacion/aplicacion';
import { Album1Page } from '../pages/album1/album1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyB1u1dAwh3i4-aGP4y7Pkr5a9PvTFI-pxU",
  authDomain: "datos-c5776.firebaseapp.com",
  databaseURL: "https://datos-c5776.firebaseio.com",
  projectId: "datos-c5776",
  storageBucket: "datos-c5776.appspot.com",
  messagingSenderId: "221623210190"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    AplicacionPage,
    Album1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    AplicacionPage,
    Album1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    DeviceMotion,
    NativeAudio,
    Vibration,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
