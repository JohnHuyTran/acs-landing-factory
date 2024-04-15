import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./pages/landing/landing.component";
import { ProfilesComponent } from './components/profile/profile.component';
import { UnsafesComponent } from './components/unsafe/unsafe.component';
import { AccidentsComponent } from './components/accident/accident.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingComponent },
  { path: "profile", component: ProfilesComponent },
  { path: "unsafe" , component: UnsafesComponent},
  { path: "accident",component: AccidentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
