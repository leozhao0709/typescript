import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Quote } from '../../data/quote.interface';

@Injectable()
export class QuotesProvider {
  private _favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this._favoriteQuotes.push(quote);
    console.log(this._favoriteQuotes);
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

  isQuoteFavorite(quote: Quote) {
    return this._favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    })
  }

}
