import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProfileComponent } from './pages/profile/profile.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full' 
  },
  {
    path: 'Sign-Up',
    component: SignupComponent
  },
    {
      path: 'Sign-In',
      component: SigninComponent
    },
    {
      path: 'navbar',
      component: NavbarComponent
    },
    {
      path:'Home',
      component:HomeComponent 
    },
    {
      path:'profile',
      component:ProfileComponent 
    },
    {
      path:'services',
      component:ServicesComponent 
    },
    {
      path:'teams',
      component:TeamsComponent 
    },
    {
      path:'aboutus',
      component:HomeCardsComponent 
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
