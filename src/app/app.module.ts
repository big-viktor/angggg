import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
