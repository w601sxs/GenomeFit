import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h1>Tab 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </ion-content>
  `
})
export class Tab1 {

	constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    // console.log(this.nav.id)
  }
}