import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "http://placehold.it/128",
    },
    {
      title: "How much does it cost?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://placehold.it/128",
    }
  ];

}
