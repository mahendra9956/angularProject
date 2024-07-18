import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnergyDashboardRoutingModule } from './energy-dashboard-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { CustomerComponent } from './customer/customer.component';
import { GreenComponent } from './green/green.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    SolutionsComponent,
    TeamComponent,
    BlogComponent,
    FaqComponent,
    CustomerComponent,
    GreenComponent
  ],
  imports: [
    CommonModule,
    EnergyDashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule

    
  ]
})
export class EnergyDashboardModule { }
