import { Component } from '@angular/core';
import { NavParams, IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  name: string;

  constructor(private _navParam: NavParams, private _navCtrl: NavController, ) {
    this.name = this._navParam.get('userName');
  };

  onGoBack() {
    this._navCtrl.pop();
  }
}