import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanComponent } from './plan/plan.component';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AddContentComponent } from './add-content/add-content.component';
import {MatListModule} from '@angular/material/list';
import { WhatToEatComponent } from './what-to-eat/what-to-eat.component';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from "@angular/common/http";
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { IngredientComponent } from './add-content/ingredient/ingredient.component';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingService } from './util/loading.service';
import { ImageService } from './util/image.service';
import { EditIngredientComponent } from './edit-content/ingredient/edit-ingredient/edit-ingredient.component';
import { RecipeComponent } from './add-content/recipe/recipe.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanComponent,
    NavbarFooterComponent,
    AddContentComponent,
    WhatToEatComponent,
    WhatsHotComponent,
    FeedComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    IngredientComponent,
    EditIngredientComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatListModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [AuthService, LoadingService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
