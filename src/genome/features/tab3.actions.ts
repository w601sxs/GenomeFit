import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {RestapiService} from "../../providers/restapi-service/restapi-service";

import {GenomeLink} from 'genomelink-node'

// @IonicPage({
//   name: 'actions'
// })

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Action</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h1>Actions</h1>
    <!--<p>-->
      <!--Proposed Actions-->
    <!--</p>-->

    <!--<button ion-button icon-left>-->
      <!--<ion-icon name="paw"></ion-icon>-->
      <!--pet strategy-->
    <!--</button>-->

    <!--<button ion-button icon-left>-->
      <!--<ion-icon name="paper-plane"></ion-icon>-->
      <!--other time pass-->
    <!--</button>-->
    
    <h2>User List</h2>
    <ion-list>
      <ion-item *ngFor="let user of users">
        {{user.name}}
      </ion-item>
    </ion-list>
    
  </ion-content>
  `,
  // templateUrl: 'tab3.actions.html',
})

export class Actions {
  users: any;
  private user: any;

  // constructor(public navCtrl: NavController) {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public restapiService: RestapiService) {
    // Id is 3, nav refers to Tab3
    // console.log(this.nav.id)
    this.getUsers();
    this.getGenome();
  }


  getGenome() {
    //genome api here!

    // const genomeLink = require('genomelink-node');
    // const callback = (report) => {
    //   console.log(report.summary.text);
    //   ;
    //   genomeLink.Report.fetch({
    //     name: 'eye-color',
    //     population: 'european',
    //     token: 'GENOMELINKTEST001'
    //   }).then((report) => {
    //     callback(report);
    //   });
    //
    // }

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
