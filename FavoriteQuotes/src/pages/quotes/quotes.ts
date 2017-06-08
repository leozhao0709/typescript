import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams, private _alerCtrl: AlertController, ) {
    this.quoteGroup = navParams.data;
  }

  ngOnInit(): void {
    // this.quoteGroup = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  onAddToFavorite(quote: Quote) {
    this._alerCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        'Ok',
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log(`Yes, go ahead`);
          }
        },
        {
          text: 'No, I change my mind',
          role: 'cancel',
          handler: () => {
            console.log(`No, I change my mind!`);
          }
        }
      ]
    }).present();


  }

}
