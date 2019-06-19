import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MapsComponent } from './maps/maps.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RanksComponent } from './ranks/ranks.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'weapons', component: WeaponsComponent},
  {path: 'enemies', component: EnemiesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'ranks', component: RanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
