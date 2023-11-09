import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './pages/shop/shop.component';

import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { LanguagePopupComponent } from './components/language-popup/language-popup.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TranslationService } from './services/translation/translation.service';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeSr from '@angular/common/locales/sr';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './features/header/header.component';
import { ButtonComponent } from './components/button/button/button.component';
import { NotificationPopupComponent } from './components/notification-popup/notification-popup.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ShopCardComponent } from './components/shop-card/shop-card.component';

registerLocaleData(localeSr, "sr")
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    LanguagePopupComponent,
    SettingsComponent,
    InputComponent,
    ContactComponent,
    ButtonComponent,
    NotificationPopupComponent,
    HomeComponent,
    ShopCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: httpTranslateLoader, deps: [HttpClient] }
    })

  ],
  providers: [TranslationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(["en", "sr"]);
    translate.setDefaultLang("en")
  }
}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http)
}