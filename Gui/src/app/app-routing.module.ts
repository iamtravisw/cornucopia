import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WhatToEatComponent } from './what-to-eat/what-to-eat.component';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';

const routes: Routes = [

  // Unprotected Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Default Protected Route
  { path: '', redirectTo: 'whats-hot', pathMatch: 'full' },

  // Protected Routes
  { path: 'plan', component: PlanComponent, canActivate:[AuthGuard] },
  { path: 'what-to-eat', component: WhatToEatComponent, canActivate:[AuthGuard] },
  { path: 'feed', component: FeedComponent, canActivate:[AuthGuard] },
  { path: 'whats-hot', component: WhatsHotComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
