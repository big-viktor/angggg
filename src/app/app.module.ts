import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from '../setting/setting.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { SelectComponent } from '../select/select.component';
import { FooterComponent } from '../footer/footer.component';
import { PageContactComponent } from '../page-contact/page-contact.component';
import { ContactComponent } from '../contact/contact.component';
import { TitleComponent } from '../title/title.component';
import { CardLotComponent } from '../card-lot/card-lot.component';
import { CardLotPageComponent } from '../card-lot-page/card-lot-page.component';
import { InfoSettingPageComponent } from '../info-setting-page/info-setting-page.component';
import { ModerationComponent } from '../moderation/moderation.component';
import { ModerationPageComponent } from '../moderation-page/moderation-page.component';
import { SelectedLotComponent } from '../selected-lot/selected-lot.component';
import { SelectedLotPageComponent } from '../selected-lot-page/selected-lot-page.component';
import { CompletedLotsComponent } from '../completed-lots/completed-lots.component';
import { CompletedLotsPageComponent } from '../completed-lots-page/completed-lots-page.component';
import { MyAdsPageComponent } from '../my-ads-page/my-ads-page.component';
import { LotArchivePageComponent } from '../lot-archive-page/lot-archive-page.component';
import { MyTariffPageComponent } from '../my-tariff-page/my-tariff-page.component';
import { MyTariffComponent } from '../my-tariff/my-tariff.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';
import { PaymentHistoryPageComponent } from '../payment-history-page/payment-history-page.component';
import { SmsPageComponent } from '../sms-page/sms-page.component';
import { SmsComponent } from '../sms/sms.component';
import { CreatingLotComponent } from '../creating-lot/creating-lot.component';
import { CreatingLotPageComponent } from '../creating-lot-page/creating-lot-page.component';
import { CompleteSetPageComponent } from '../complete-set-page/complete-set-page.component';
import { CompleteSetComponent } from '../complete-set/complete-set.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DamageComponent } from '../damage/damage.component';
import { DamagePageComponent } from '../damage-page/damage-page.component';
import { PhotographyComponent } from '../photography/photography.component';
import { PhotographyPageComponent } from '../photography-page/photography-page.component';
import { PublicationComponent } from '../publication/publication.component';
import { PublicationPageComponent } from '../publication-page/publication-page.component';
import { PublicationReviewComponent } from '../publication-review/publication-review.component';
import { VinCheckComponent } from '../vin-check/vin-check.component';
import { VinCheckPageComponent } from '../vin-check-page/vin-check-page.component';
import { WatchVinComponent } from '../watch-vin/watch-vin.component';
import { WatchVinPageComponent } from '../watch-vin-page/watch-vin-page.component';

const appRoutes: Routes = [
  {path: '', component: PageContactComponent},
  {path: 'Lot', component: CardLotPageComponent},
  {path: 'Info', component: InfoSettingPageComponent},
  {path: 'Moderation', component: ModerationPageComponent},
  {path: 'SelectedLot', component: SelectedLotPageComponent },
  {path: 'CompletedLot', component: CompletedLotsPageComponent },
  {path: 'MyAdsLot', component: MyAdsPageComponent },
  {path: 'LotArchive', component: LotArchivePageComponent },
  {path: 'MyTariff', component: MyTariffPageComponent },
  {path: 'PaymentHistory', component:PaymentHistoryPageComponent },
  {path: 'SmsPage', component:SmsPageComponent },
  {path: 'CreatingLot', component:CreatingLotPageComponent },
  {path: 'CompleteSet', component:CompleteSetPageComponent },
  {path: 'DamagePage', component:DamagePageComponent },
  {path: 'PhotographyPage', component:PhotographyPageComponent },
  {path: 'PublicationPage', component:PublicationPageComponent },
  {path: 'VinCheckPage', component:VinCheckPageComponent },
  {path: 'WatchVinPage', component:WatchVinPageComponent },

  

]
@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HeaderComponent,
    MenuComponent,
    SelectComponent,
    FooterComponent,
    PageContactComponent,
    ContactComponent,
    TitleComponent,
    CardLotComponent,
    CardLotPageComponent,
    InfoSettingPageComponent,
    ModerationComponent,
    ModerationPageComponent,
    SelectedLotComponent,
    SelectedLotPageComponent,
    CompletedLotsComponent,
    CompletedLotsPageComponent,
    MyAdsPageComponent,
    LotArchivePageComponent,
    MyTariffPageComponent,
    MyTariffComponent,
    PaymentHistoryComponent,
    PaymentHistoryPageComponent,
    SmsPageComponent,
    SmsComponent,
    CreatingLotComponent,
    CreatingLotPageComponent,
    CompleteSetPageComponent,
    CompleteSetComponent,
    CheckboxComponent,
    DamageComponent,
    DamagePageComponent,
    PhotographyComponent,
    PhotographyPageComponent,
    PublicationComponent,
    PublicationPageComponent,
    PublicationReviewComponent,
    VinCheckComponent,
    VinCheckPageComponent,
    WatchVinComponent,
    WatchVinPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
