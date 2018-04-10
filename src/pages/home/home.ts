import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

import {Genometabs} from '../../genome/features/genometabs';

import {RestapiService} from '../../providers/restapi-service/restapi-service';

import {GenomeLink} from 'genomelink-node'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // template: `<ion-nav [root]="root"></ion-nav>`
})

export class HomePage {
  users: any;
  private user: any;
  // root = Genometabs;

  // constructor(public navCtrl: NavController) {
  // constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  // constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController) {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public restapiService: RestapiService) {
    this.getUsers();
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

  getGenome() {
    const genomeLink = require('genomelink-node');
    // const genomeLink =  Ge
    const callback = (report) => {
      console.log(report.summary.text);
      ;
      genomeLink.Report.fetch({
        name: 'eye-color',
        population: 'european',
        token: 'GENOMELINKTEST001'
      }).then((report) => {
        callback(report);
      });

    }
  }

  getUsers() {
    this.restapiService.getUsers()
      .then(data => {
        this.users = data;
      });
  }

  saveUser() {
    this.restapiService.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
