import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvertiserModule } from './advertiser/advertiser.module';
import { AffiliateModule } from './affiliate/affiliate.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      AdvertiserModule,
      AffiliateModule,
      MainModule,
      SharedModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
