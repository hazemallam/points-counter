import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { UserslearnmoreComponent } from './views/userslearnmore/userslearnmore.component';
import { MerchantshomeComponent } from './views/merchantshome/merchantshome.component';
import { OrderComponent } from './views/order/order.component';
import { ContactComponent } from './views/contact/contact.component';
import { DiscoverComponent } from './views/discover/discover.component';
import { RewardsComponent } from './views/rewards/rewards.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MainServiceService} from './services/main-service.service';
import {AuthInterceptor} from 'src/app/user.intersptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UserslearnmoreComponent,
    MerchantshomeComponent,
    OrderComponent,
    ContactComponent,
    DiscoverComponent,
    RewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MainServiceService, {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
