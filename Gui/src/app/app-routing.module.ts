import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WhatToEatComponent } from './what-to-eat/what-to-eat.component';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';

const routes: Routes = [
  { path: 'plan', component: PlanComponent },
  { path: 'what-to-eat', component: WhatToEatComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'whats-hot', component: WhatsHotComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
