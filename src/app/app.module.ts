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

const roterSettings: Routes = [
  { path: '', component: ContentComponent},
  { path: "currency", component: CurrencyComponent},
  { path: "currency-new", component: CurrencyNewComponent},
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
    CurrencyNewComponent
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
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
