import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';

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

  constructor(private navParams: NavParams, private _alerCtrl: AlertController, private _quotesProvider: QuotesProvider, ) {
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
        {
          text: 'Yes, go ahead',
          handler: () => {
            this._quotesProvider.addQuoteToFavorites(quote);
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

  onRemoveToFavorite(quote: Quote) {
    this._quotesProvider.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this._quotesProvider.isQuoteFavorite(quote);
  }


}
