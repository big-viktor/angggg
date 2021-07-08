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

const appRoutes: Routes = [
  {path: '', component: PageContactComponent},
  {path: 'Lot', component: CardLotPageComponent},
  {path: 'Info', component: InfoSettingPageComponent},
  {path: 'Moderation', component: ModerationPageComponent},
  {path: 'SelectedLot', component: SelectedLotPageComponent },


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
