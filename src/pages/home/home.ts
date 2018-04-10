import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

import {Genometabs} from '../../genome/features/genometabs';

import {RestapiService} from '../../providers/restapi-service/restapi-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // template: `<ion-nav [root]="root"></ion-nav>`
})

export class HomePage {
  // root = Genometabs;

  // constructor(public navCtrl: NavController) {
  // constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  // constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController) {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public restapiService: RestapiService) {
  }


  doWalkthrough() {
    console.log('Navigating to slides');
    this.navCtrl.push('walkthrough');
  }


  genomeLogin() {
    this.showLoginToast();
    console.log('Logging into genome fit app');
    this.navCtrl.push(Genometabs);
  }

  showLoginToast() {
    const toast = this.toastCtrl.create({
      message: 'Successfully logged in!',
      showCloseButton: true,
      duration: 2000,
      position: 'top',
      closeButtonText: 'Cool'
    });
    toast.present();
  }

  genomeCancel() {
    console.log('starting walkthrough');
    this.navCtrl.push('walkthrough');
  }


}
