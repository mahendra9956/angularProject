import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryApiComponent } from './country-api/country-api.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponents } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { PersondataComponent } from './persondata/persondata.component';
import { LandingPageComponent } from '../energy-dashboard/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "country",
    component:CountryApiComponent
  },
  {
    path: "home",
    component:HomepageComponent
  },
  {
    path: "contacts",
    component:ContactUsComponent
  },
  {
    path: "about",
    component: AboutComponents
  },
  {
    path: "faq",
    component:FaqComponent
  },
  {
    path: "person",
    component:PersondataComponent
  },
  {
    path:"landing",
    component:LandingPageComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
