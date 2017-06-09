import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tapped = 0;
  pressed = 0;

  constructor() {

  }

  onDidReset(resetType: string) {
    switch (resetType) {
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default:
        this.tapped = 0;
        this.pressed = 0;
        break;
    }
  }

  onTap() {
    console.log(`tapped`);
    this.tapped++;
  }

  onPress() {
    console.log(`pressed`);
    this.pressed++;
  }

  didWin() {
    return this.tapped === 2 && this.pressed === 4;
  }

}
