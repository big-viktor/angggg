import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from '../setting/setting.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { SelectComponent } from '../select/select.component';
import { FooterComponent } from '../footer/footer.component';
import { PageContactComponent } from '../Page/page-contact/page-contact.component';
import { ContactComponent } from '../contact/contact.component';
import { TitleComponent } from '../title/title.component';
import { CardLotComponent } from '../card-lot/card-lot.component';
import { CardLotPageComponent } from '../card-lot-page/card-lot-page.component';
import { InfoSettingPageComponent } from '../Page/info-setting-page/info-setting-page.component';
import { ModerationComponent } from '../moderation/moderation.component';
import { ModerationPageComponent } from '../Page/moderation-page/moderation-page.component';
import { SelectedLotComponent } from '../selected-lot/selected-lot.component';
import { SelectedLotPageComponent } from '../Page/selected-lot-page/selected-lot-page.component';
import { CompletedLotsComponent } from '../completed-lots/completed-lots.component';
import { CompletedLotsPageComponent } from '../completed-lots-page/completed-lots-page.component';
import { MyAdsPageComponent } from '../Page/my-ads-page/my-ads-page.component';
import { LotArchivePageComponent } from '../Page/lot-archive-page/lot-archive-page.component';
import { MyTariffPageComponent } from '../Page/my-tariff-page/my-tariff-page.component';
import { MyTariffComponent } from '../my-tariff/my-tariff.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';
import { PaymentHistoryPageComponent } from '../Page/payment-history-page/payment-history-page.component';
import { SmsPageComponent } from '../Page/sms-page/sms-page.component';
import { SmsComponent } from '../sms/sms.component';
import { CreatingLotComponent } from '../creating-lot/creating-lot.component';
import { CreatingLotPageComponent } from '../Page/creating-lot-page/creating-lot-page.component';
import { CompleteSetPageComponent } from '../complete-set-page/complete-set-page.component';
import { CompleteSetComponent } from '../complete-set/complete-set.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DamageComponent } from '../damage/damage.component';
import { DamagePageComponent } from '../damage-page/damage-page.component';
import { PhotographyComponent } from '../photography/photography.component';
import { PhotographyPageComponent } from '../Page/photography-page/photography-page.component';
import { PublicationComponent } from '../publication/publication.component';
import { PublicationPageComponent } from '../Page/publication-page/publication-page.component';
import { PublicationReviewComponent } from '../publication-review/publication-review.component';
import { VinCheckComponent } from '../vin-check/vin-check.component';
import { VinCheckPageComponent } from '../Page/vin-check-page/vin-check-page.component';
import { WatchVinComponent } from '../watch-vin/watch-vin.component';
import { WatchVinPageComponent } from '../watch-vin-page/watch-vin-page.component';
import { ChartComponent } from '../chart/chart.component';
import { ReportsPageComponent } from '../Page/reports-page/reports-page.component';
import { ReportsComponent } from '../reports/reports.component';
import { PossessionComponent } from '../possession/possession.component';
import { RepairComponent } from '../repair/repair.component';
import { PartnerComponent } from '../partner/partner.component';
import { PartnerPageComponent } from '../Page/partner-page/partner-page.component';
import { HeaderLogComponent } from '../header-log/header-log.component';
import { CardAuctionComponent } from '../card-auction/card-auction.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { PartnerImgPageComponent } from '../Page/partner-img-page/partner-img-page.component';
import { PartnerBorderComponent } from '../partner-border/partner-border.component';
import { LogComponent } from '../log/log.component';
import { LogPageComponent } from '../log-page/log-page.component';
import { TelLogComponent } from '../tel-log/tel-log.component';
import { TelLogPageComponent } from '../tel-log-page/tel-log-page.component';
import { ReportLotComponent } from '../report-lot/report-lot.component';
import { ReportLotPageComponent } from '../Page/report-lot-page/report-lot-page.component';
import { LotComponent } from '../lot/lot.component';
import { LotPageComponent } from '../Page/lot-page/lot-page.component';
import { CarAuctionsComponent } from '../car-auctions/car-auctions.component';
import { CarAuctionsPageComponent } from '../Page/car-auctions-page/car-auctions-page.component';
import { ClosedLotComponent } from '../closed-lot/closed-lot.component';
import { ClosedLotPageComponent } from '../closed-lot-page/closed-lot-page.component';
import { CompletedPublicationComponent } from '../completed-publication/completed-publication.component';
import { CompletedPublicationPageComponent } from '../completed-publication-page/completed-publication-page.component';
import { DownCheckComponent } from '../down-check/down-check.component';
import { DownCheckMenuComponent } from '../down-check-menu/down-check-menu.component';
import { SortComponent } from '../sort/sort.component';
import { NewLotComponent } from '../Page/new-lot/new-lot.component';
import { NewLotClosedComponent } from '../new-lot-closed/new-lot-closed.component';
import { CarAuctionsPageReversComponent } from '../Page/car-auctions-page-revers/car-auctions-page-revers.component';
import { NewLotReversComponent } from '../new-lot-revers/new-lot-revers.component';
import { NewLotClosedReversComponent } from '../new-lot-closed-revers/new-lot-closed-revers.component';
import { SortReversComponent } from '../sort-revers/sort-revers.component';
import { AnnouncementPageComponent } from '../Page/announcement-page/announcement-page.component';
import { SortReversTwoComponent } from '../sort-revers-two/sort-revers-two.component';
import { DownCheckMenuReversComponent } from '../down-check-menu-revers/down-check-menu-revers.component';
import { NewsPageComponent } from '../Page/news-page/news-page.component';
import { NewsComponent } from '../news/news.component';
import { NewsDetailsPageComponent } from '../Page/news-details-page/news-details-page.component';
import { NewsDetailsComponent } from '../news-details/news-details.component';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { AboutCompanyPageComponent } from '../Page/about-company-page/about-company-page.component';
import { SliderFotoComponent } from '../slider-foto/slider-foto.component';
import { LogWarningComponent } from '../log-warning/log-warning.component';
import { CheckMenuDropComponent } from '../check-menu-drop/check-menu-drop.component';

const appRoutes: Routes = [
  { path: 'MyOffice', component: PageContactComponent },
  { path: 'Lot', component: CardLotPageComponent },
  { path: 'Info', component: InfoSettingPageComponent },
  { path: 'Moderation', component: ModerationPageComponent },
  { path: 'SelectedLot', component: SelectedLotPageComponent },
  { path: 'CompletedLot', component: CompletedLotsPageComponent },
  { path: 'MyAdsLot', component: MyAdsPageComponent },
  { path: 'LotArchive', component: LotArchivePageComponent },
  { path: 'MyTariff', component: MyTariffPageComponent },
  { path: 'PaymentHistory', component: PaymentHistoryPageComponent },
  { path: 'SmsPage', component: SmsPageComponent },
  { path: 'CreatingLot', component: CreatingLotPageComponent },
  { path: 'CompleteSet', component: CompleteSetPageComponent },
  { path: 'DamagePage', component: DamagePageComponent },
  { path: 'PhotographyPage', component: PhotographyPageComponent },
  { path: 'PublicationPage', component: PublicationPageComponent },
  { path: 'VinCheckPage', component: VinCheckPageComponent },
  { path: 'WatchVinPage', component: WatchVinPageComponent },
  { path: 'ReportsPage', component: ReportsPageComponent },
  { path: '', component: PartnerPageComponent },
  { path: 'PartnerImgPage', component: PartnerImgPageComponent },
  { path: 'LogPage', component: LogPageComponent },
  { path: 'TelLogPage', component: TelLogPageComponent },
  { path: 'ReportLotPage', component: ReportLotPageComponent },
  { path: 'LotPage', component: LotPageComponent },
  { path: 'CarAuctionsPage', component: CarAuctionsPageComponent },
  { path: 'ClosedLotPage', component: ClosedLotPageComponent },
  {
    path: 'CompletedPublicationPage',
    component: CompletedPublicationPageComponent,
  },
  { path: 'CarAuctionsPageRevers', component: CarAuctionsPageReversComponent },
  { path: 'AnnouncementPage', component: AnnouncementPageComponent },
  { path: 'NewsPage', component: NewsPageComponent },
  { path: 'NewsDetailsPage', component: NewsDetailsPageComponent },
  { path: 'AboutCompanyPage', component: AboutCompanyPageComponent },
  { path: 'SliderFotoComponent', component: SliderFotoComponent },
];
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
    ChartComponent,
    ReportsPageComponent,
    ReportsComponent,
    PossessionComponent,
    RepairComponent,
    PartnerComponent,
    PartnerPageComponent,
    HeaderLogComponent,
    CardAuctionComponent,
    CarouselComponent,
    PartnerImgPageComponent,
    PartnerBorderComponent,
    LogComponent,
    LogPageComponent,
    TelLogComponent,
    TelLogPageComponent,
    ReportLotComponent,
    ReportLotPageComponent,
    LotComponent,
    LotPageComponent,
    CarAuctionsComponent,
    CarAuctionsPageComponent,
    ClosedLotComponent,
    ClosedLotPageComponent,
    CompletedPublicationComponent,
    CompletedPublicationPageComponent,
    DownCheckComponent,
    DownCheckMenuComponent,
    SortComponent,
    NewLotComponent,
    NewLotClosedComponent,
    CarAuctionsPageReversComponent,
    NewLotReversComponent,
    NewLotClosedReversComponent,
    SortReversComponent,
    AnnouncementPageComponent,
    SortReversTwoComponent,
    DownCheckMenuReversComponent,
    NewsPageComponent,
    NewsComponent,
    NewsDetailsPageComponent,
    NewsDetailsComponent,
    AboutCompanyComponent,
    AboutCompanyPageComponent,
    SliderFotoComponent,
    LogWarningComponent,
    CheckMenuDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    IvyCarouselModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
