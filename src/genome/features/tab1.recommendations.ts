import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {RestapiService} from "../../providers/restapi-service/restapi-service";

// @IonicPage({
//   name: 'questions'
// })

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Recommendations</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h1>Recommendations</h1>
    <p>
      Questions for inputs
    </p>
    
    <ion-card>
      <ion-card-header>
        Question Cards
      </ion-card-header>
      <ion-card-content>
        ... lets see ...
      </ion-card-content>
    </ion-card>
    
    <ion-card>
      <ion-item>
        <ion-label>I like this</ion-label>
        <ion-checkbox color="dark" checked="true"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>I don't like this</ion-label>
        <ion-checkbox disabled="true"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Maybe this</ion-label>
        <ion-checkbox></ion-checkbox>
      </ion-item>
    </ion-card>
    
    
    <ion-card>
      <ion-item>
        <ion-label>Light</ion-label>
        <ion-checkbox color="light" checked="true"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Dark</ion-label>
        <ion-checkbox color="dark" checked="true"></ion-checkbox>
      </ion-item>
      
      <ion-item>
        <ion-label>Secondary</ion-label>
        <ion-checkbox color="secondary" checked="true"></ion-checkbox>
      </ion-item>

      <ion-item>
        <ion-label>Danger</ion-label>
        <ion-checkbox color="danger" checked="true"></ion-checkbox>
      </ion-item>
    </ion-card>
  </ion-content>
  `,
  templateUrl: 'tab1.recommendations.html',
})

export class Recommendations {

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
}
