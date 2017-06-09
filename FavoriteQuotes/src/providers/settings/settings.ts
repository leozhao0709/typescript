import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsProvider {
  private _altBackground = false;

  setBackground(isAlt: boolean) {
    this._altBackground = isAlt;
  }

  isAltBackground() {
    return this._altBackground;
  }
}
