import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { ContentComponent } from './content/content.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyService } from './service/currency.service';
import { HttpService } from './service/http.service';
import { ConfigService } from './service/config.service';
import { CurrencyNewComponent } from './currency/currency-new/currency-new.component';
import { CurrencyEditComponent } from './currency/currency-edit/currency-edit.component';
import { UrlService } from './service/url.service';
import { ParnerComponent } from './parner/parner.component';
import { PartnerNewComponent } from './parner/partner-new/partner-new.component';
import { PartnerEditComponent } from './parner/partner-edit/partner-edit.component';
import { PartnerService } from './service/partner.service';
import { SzamlaComponent } from './szamla/szamla.component';
import { SzamlaEditComponent } from './szamla/szamla-edit/szamla-edit.component';
import { SzamlaNewComponent } from './szamla/szamla-new/szamla-new.component';

const roterSettings: Routes = [
  { path: '', component: ContentComponent},
  { path: "currency", component: CurrencyComponent},
  { path: "currency-new", component: CurrencyNewComponent},
  { path: "currency-edit", component: CurrencyEditComponent},
  { path: "partner", component: ParnerComponent},
  { path: "partner-new", component: PartnerNewComponent},
  { path: "partner-edit", component: PartnerEditComponent},
  { path: "szamla", component: SzamlaComponent},
  { path: "szamla-new", component: SzamlaNewComponent},
  { path: "szamla-edit", component: SzamlaEditComponent},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    ContentComponent,
    TopHeaderComponent,
    PageNotFoundComponent,
    CurrencyComponent,
    CurrencyNewComponent,
    CurrencyEditComponent,
    ParnerComponent,
    PartnerNewComponent,
    PartnerEditComponent,
    SzamlaComponent,
    SzamlaEditComponent,
    SzamlaNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(roterSettings)
  ],
  providers: [
    CurrencyService,
    HttpService,
    ConfigService,
    UrlService,
    PartnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
