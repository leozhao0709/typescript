import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPageModule } from '../pages/favorites/favorites.module';
import { QuotesPageModule } from '../pages/quotes/quotes.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { QuotePageModule } from '../pages/quote/quote.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { LibraryPageModule } from '../pages/library/library.module';
import { QuotesProvider } from '../providers/quotes/quotes';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FavoritesPageModule,
    LibraryPageModule,
    QuotesPageModule,
    QuotePageModule,
    SettingsPageModule,
    TabsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesProvider
  ]
})
export class AppModule { }
