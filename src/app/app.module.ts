import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfilesComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UnsafesComponent } from './components/unsafe/unsafe.component';
import { AccidentsComponent } from './components/accident/accident.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfilesComponent,
    UnsafesComponent,
    AccidentsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
