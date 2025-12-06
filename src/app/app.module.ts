import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/components/home/home.component';
import { ProductsComponent } from './Components/components/products/products.component';
import { ServicesComponent } from './Components/components/services/services.component';
import { AboutComponent } from './Components/components/about/about.component';
import { LoginComponent } from './Components/components/login/login.component';
import { FooterComponent } from './Components/components/footer/footer.component';
import { GetStartedComponent } from './Components/components/get-started/get-started.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HappyClientComponent } from './Components/components/home/happy-client/happy-client.component';
// import { FooterComponent } from './Components/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    GetStartedComponent,
    HappyClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
