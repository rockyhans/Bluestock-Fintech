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

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'component', component: MyComponentComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'ipoInfo', component: IpoInfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ipoPageInfo', component: SidebarComponent },
  { path: 'yyyy', component: BrokerComparisonComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
