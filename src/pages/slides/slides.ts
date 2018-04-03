import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Slides page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'walkthrough'
})

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class Slides {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slides');
  }

  slides = [
    {
      title: "Welcome to GenomeFit!",
      description: "We use insights from your DNA to provide custom workout and meal recommendations.",
      image: "http://placehold.it/128",
    },
    {
      title: "Why should I use GenomeFit?",
      description: "<i>GenomeFit</i> is an open source thing that is cool..",
      image: "http://placehold.it/128",
    },
    {
      title: "How much does it cost?",
      description: "How much are you willing to invest in yourself?",
      image: "http://placehold.it/128",
    }
  ];

  goHome(msg: string) {
    console.log("closing slider from the " + msg + " button");
    this.navCtrl.pop();
  }

}
