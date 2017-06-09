import { Component } from '@angular/core';
import { Toggle, IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private _settingsProvider: SettingsProvider, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
    this._settingsProvider.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this._settingsProvider.isAltBackground();
  }

}
