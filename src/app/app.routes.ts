import { Route } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { IpoInfoComponent } from './ipo-info/ipo-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrokerComparisonComponent } from './broker-comparison/broker-comparison.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { BrokerCompareComponent } from './broker-compare/broker-compare.component';
import { SharkInvestorsComponent } from './shark-investors/shark-investors.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';

export const routes: Route[] = [
  { path: '', component: AppHomePageComponent },
  { path: 'Upcoming IPO - View All', component: HomeComponent },
  { path: 'IPO Upcoming Screen', component: MyComponentComponent },
  { path: 'Sign In', component: SigninComponent },
  { path: 'Sign Up', component: SignupComponent },
  { path: 'Forget Password', component: ForgetPasswordComponent },
  { path: 'ipoInfo', component: IpoInfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Ragister IPO Details And Dasboard', component: SidebarComponent },
  { path: 'PageNotFound', component: NotFoundComponent },
  { path: 'All Broker', component: CompThreeComponent },
  { path: 'Broker Compare - Web', component: BrokerCompareComponent },
  { path: 'Shark Investors', component: SharkInvestorsComponent },

  { path: 'yyyy', component: BrokerComparisonComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
