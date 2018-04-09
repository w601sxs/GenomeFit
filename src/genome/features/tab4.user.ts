import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

// @IonicPage({
//   name: 'user'   
//})

@Component({
    template: `
  <ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Selects</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item>
      <ion-label>Gender</ion-label>
      <ion-select [(ngModel)]="gender">
        <ion-option value="f">Female</ion-option>
        <ion-option value="m">Male</ion-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Date of Birth</ion-label>
      <ion-select [(ngModel)]="month">
        <ion-option value="01">January</ion-option>
        <ion-option value="02">February</ion-option>
        <ion-option value="03">March</ion-option>
        <ion-option value="04">April</ion-option>
        <ion-option value="05">May</ion-option>
        <ion-option value="06">June</ion-option>
        <ion-option value="07">July</ion-option>
        <ion-option value="08">August</ion-option>
        <ion-option value="09">September</ion-option>
        <ion-option value="10">October</ion-option>
        <ion-option value="11">November</ion-option>
        <ion-option value="12" checked="true">December</ion-option>
      </ion-select>
      <ion-select [(ngModel)]="year">
        <ion-option>1989</ion-option>
        <ion-option>1990</ion-option>
        <ion-option>1991</ion-option>
        <ion-option>1992</ion-option>
        <ion-option>1993</ion-option>
        <ion-option checked="true">1994</ion-option>
        <ion-option>1995</ion-option>
        <ion-option>1996</ion-option>
        <ion-option>1997</ion-option>
        <ion-option>1998</ion-option>
        <ion-option>1999</ion-option>
      </ion-select>
    </ion-item>

        <ion-item>
      <ion-label>Goal</ion-label>
      <ion-select [(ngModel)]="gaming">
        <ion-option value="nes">Weight Loss</ion-option>
        <ion-option value="n64">Muscle Gain</ion-option>
        <ion-option value="ps">Both</ion-option>
      </ion-select>
    </ion-item>

  </ion-list>
    
 
  `
})

export class User {

    constructor(public navCtrl: NavController) {

    }
}
