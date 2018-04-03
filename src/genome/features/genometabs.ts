import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questions } from './tab1.questions';
import { Insights } from './tab2.insights';
import { Actions } from './tab3.actions';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
// @IonicPage({
//   name: 'genome'
// })

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class Genometabs {

	tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tab1 = Questions;
    this.tab2 = Insights;
    this.tab3 = Actions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
