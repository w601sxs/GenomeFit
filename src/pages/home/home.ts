import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

import {Genometabs} from '../../genome/features/genometabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // template: `<ion-nav [root]="root"></ion-nav>`
})

export class HomePage {
  // root = Genometabs;

  // constructor(public navCtrl: NavController) {
  // constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController) {

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
      duration: 3000,
      position: 'middle',
      closeButtonText: 'Cool'
    });
    toast.present();
  }

  genomeCancel() {
    console.log('get lost!');
    this.navCtrl.push('walkthrough');
  }
}
