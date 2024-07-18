import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { CustomerComponent } from './customer/customer.component';
import { GreenComponent } from './green/green.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path :"solution",
    component:SolutionsComponent
  },
  {
    path: "team",
    component:TeamComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
     path: "faq",
     component:FaqComponent
  },
  {
    path:"customer",
    component:CustomerComponent
  },
  {
    path: "green",
    component: GreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnergyDashboardRoutingModule { }
