import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileStatsComponent } from './profile/profile-stats/profile-stats.component';
import { ProfileRanksComponent } from './profile/profile-ranks/profile-ranks.component';
import { HomeComponent } from './home/home.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { RanksComponent } from './ranks/ranks.component';
import { CampaignMapsComponent } from './maps/campaign-maps/campaign-maps.component';
import { WarzoneMapsComponent } from './maps/warzone-maps/warzone-maps.component';
import { ArenaMapsComponent } from './maps/arena-maps/arena-maps.component';
import { DropdownDirective } from './dropdown.directive';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileDetailComponent,
    ProfileStatsComponent,
    ProfileRanksComponent,
    HomeComponent,
    WeaponsComponent,
    VehiclesComponent,
    EnemiesComponent,
    RanksComponent,
    CampaignMapsComponent,
    WarzoneMapsComponent,
    ArenaMapsComponent,
    DropdownDirective,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
