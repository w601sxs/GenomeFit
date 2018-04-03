import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

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
    <p>
      Proposed Actions
    </p>

    <button ion-button icon-left>
      <ion-icon name="paw"></ion-icon>
      pet strategy
    </button>

    <button ion-button icon-left>
      <ion-icon name="paper-plane"></ion-icon>
      other time pass
    </button>

  </ion-content>
  `
})

export class Actions {

  constructor(public navCtrl: NavController) {
    // Id is 3, nav refers to Tab3
    // console.log(this.nav.id)
  }
}
