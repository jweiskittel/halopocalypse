import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RanksComponent } from './ranks/ranks.component';
import { ArenaMapsComponent } from './maps/arena-maps/arena-maps.component';
import { WarzoneMapsComponent } from './maps/warzone-maps/warzone-maps.component';
import { CampaignMapsComponent } from './maps/campaign-maps/campaign-maps.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'weapons', component: WeaponsComponent},
  {path: 'enemies', component: EnemiesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'ranks', component: RanksComponent},
  {path: 'arena', component: ArenaMapsComponent},
  {path: 'warzone', component: WarzoneMapsComponent},
  {path: 'campaign', component: CampaignMapsComponent},
  {path: 'company/:id', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
