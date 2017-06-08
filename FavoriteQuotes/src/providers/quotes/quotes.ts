import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Quote } from '../../data/quote.interface';

@Injectable()
export class QuotesProvider {
  private _favoriteQuotes: Quote[];

  constructor(public http: Http) {
    console.log('Hello QuotesProvider Provider');
  }

  addQuoteToFavorites(quote: Quote) {
    this._favoriteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const positon = this._favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this._favoriteQuotes.splice(positon, 1);
  }

  getFavoriteQuotes() {
    return this._favoriteQuotes.slice();
  }

}
