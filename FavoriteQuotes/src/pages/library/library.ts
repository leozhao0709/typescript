import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  quoteCollection: { category: string, quotes: Quote[], icon: string }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quoteCollection = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
