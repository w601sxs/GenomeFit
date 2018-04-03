import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

// @IonicPage({
//   name: 'insights'
// })

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Insight</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h1>Insights</h1>
      <p>
        Insights from their API
      </p>

      <div class="card-background-page">
        <ion-card class="card-background-page">
          <img src="../../assets/genome/gene_digital.jpg"/>
          <div class="card-title">your digital gene</div>
          <div class="card-subtitle">your future!</div>
        </ion-card>


        <ion-card class="card-background-page">
          <img src="../../assets/genome/morph_gene_woman.jpg"/>
          <div class="card-title" style="color: #222222">be you a gal</div>
          <!--<div class="card-subtitle">gal</div>-->
        </ion-card>

        <ion-card class="card-background-page">
          <img src="../../assets/genome/morph_gene_man.jpg"/>
          <div class="card-title" style="color: #222222">or a dude!</div>
          <!--<div class="card-subtitle">dude!</div>-->
        </ion-card>
      </div>
      
    </ion-content>
  `
})

export class Insights {

  constructor(public navCtrl: NavController) {
    // Id is 2, nav refers to Tab2
    // console.log(this.nav.id)
  }
}
