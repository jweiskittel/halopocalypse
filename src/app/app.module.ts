import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapsComponent } from './maps/maps.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { ProfileStatsComponent } from './profile/profile-stats/profile-stats.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { RanksComponent } from './ranks/ranks.component';
import { CampaignMapsComponent } from './maps/campaign-maps/campaign-maps.component';
import { WarzoneMapsComponent } from './maps/warzone-maps/warzone-maps.component';
import { ArenaMapsComponent } from './maps/arena-maps/arena-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapsComponent,
    ProfileComponent,
    HomeComponent,
    ProfileDetailComponent,
    WeaponsComponent,
    ProfileStatsComponent,
    VehiclesComponent,
    EnemiesComponent,
    RanksComponent,
    CampaignMapsComponent,
    WarzoneMapsComponent,
    ArenaMapsComponent
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
