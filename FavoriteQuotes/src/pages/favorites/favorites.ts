import { Component } from '@angular/core';
import { ModalController, IonicPage } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private _quotesProvider: QuotesProvider, private _modelCtrl: ModalController, private _settingsProvider: SettingsProvider, ) { };

  ionViewWillEnter() {
    this.quotes = this._quotesProvider.getFavoriteQuotes();
  }

  onViewQuote(quote) {
    const modal = this._modelCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((unfavorite: boolean) => {
      if (unfavorite) {
        this.onUnfavorite(quote);
      }
    });
  }

  onUnfavorite(quote: Quote) {
    this._quotesProvider.removeQuoteFromFavorites(quote);
    this.quotes = this._quotesProvider.getFavoriteQuotes();
  }

  getBackground() {
    return this._settingsProvider.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
