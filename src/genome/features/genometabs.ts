import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questions } from './tab1.questions';
import { Insights } from './tab2.insights';
import { Actions } from './tab3.actions';
import { User } from './tab4.user';

import {Selects} from '../../pages/selects/selects';

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
  tab4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tab1 = Questions; // Recommendations
    this.tab2 = Insights; // api results
    this.tab3 = Actions; //
    this.tab4 = User;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

  doUserSelects() {
      console.log('Navigating to slides');
      this.navCtrl.push(Selects);
  }

}
