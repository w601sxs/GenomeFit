import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

// @IonicPage({
//   name: 'questions'
// })

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Question</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h1>Questions</h1>
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
  `
})

export class Questions {

	constructor(public navCtrl: NavController) {
    // Id is 1, nav refers to Tab1
    // console.log(this.nav.id)
  }
}
