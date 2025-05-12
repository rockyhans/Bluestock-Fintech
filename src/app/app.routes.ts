import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { IpoInfoComponent } from './ipo-info/ipo-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './Small-Coponents/not-found/not-found.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { BrokerCompareComponent } from './broker-compare/broker-compare.component';
import { SharkInvestorsComponent } from './Small-Coponents/shark-investors/shark-investors.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { CommunityComponent } from './community/community.component';
import { SectorComponent } from './sector/sector.component';
import { CareerComponent } from './Small-Coponents/career/career.component';
import { AboutComponent } from './Small-Coponents/about/about.component';
import { ContactComponent } from './Small-Coponents/contact/contact.component';
import { ProductComponent } from './Small-Coponents/product/product.component';
import { BlogsComponent } from './Small-Coponents/blogs/blogs.component';
import { LargeCapComponent } from './Small-Coponents/large-cap/large-cap.component';
import { ViewAllIpoComponent } from './view-all-ipo/view-all-ipo.component';

export const routes: Route[] = [
  { path: '', component: AppHomePageComponent },
  { path: 'Upcoming IPO - View All', component: HomeComponent },
  { path: 'IPO Upcoming Screen', component: ViewAllIpoComponent },
  { path: 'Sign In', component: SigninComponent },
  { path: 'Sign Up', component: SignupComponent },
  { path: 'Forget Password', component: ForgetPasswordComponent },
  { path: 'ipoInfo', component: IpoInfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Ragister-IPO-Details-And-Dasboard', component: SidebarComponent },
  { path: 'PageNotFound', component: NotFoundComponent },
  { path: 'All Broker', component: CompThreeComponent },
  { path: 'Broker Compare - Web', component: BrokerCompareComponent },
  { path: 'Shark Investors', component: SharkInvestorsComponent },
  { path: 'Community', component: CommunityComponent },
  { path: 'Sector', component: SectorComponent },
  { path: 'Careers', component: CareerComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact Us', component: ContactComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Mutual Fund', component: LargeCapComponent },
  { path: 'Compare Broker', component: BrokerCompareComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
