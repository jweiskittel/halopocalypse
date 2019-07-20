import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArenaStatsService } from '../../services/arena-stats.service';
import { ArenaStats } from '../../models/arena-stats.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Weapon } from 'src/app/models/weapons.model';
import { MetadataService } from 'src/app/services/metadata.service';
import { ArenaWeapon } from 'src/app/models/arena-weapon.model';
import { _ } from 'underscore';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {
  @ViewChild('weaponId') weaponId: ElementRef;
  arenaStats: ArenaStats;
  weapons: Weapon[];
  arenaWeapons: ArenaWeapon[];
  selectedWeapon: Weapon[];
  selectedArenaWeapon: ArenaWeapon[];
  accuracy: number;
  weaponNameArray: number[] = [];
  arenaWeaponNameArray: number[] = [];
  usedWeaponsArray: number[] = [];
  weaponsList: Weapon[] = [];
  totalKills: number;
  totalDeaths: number;
  totalAssists: number;
  totalGamesPlayed: number;
  totalGamesLost: number;
  totalGamesWon: number;
  winPercentage: number;
  totalAssassinations: number;
  totalGrenadeKills: number;
  totalMeleeKills: number;
  totalPowerWeaponKills: number;
  totalGroundPoundKills: number;
  totalSpartanChargeKills: number;
  totalHeadshots: number;
  kdaRatio: number;

  constructor(
    private arenaService: ArenaStatsService,
    private route: ActivatedRoute,
    private metadataService: MetadataService
  ) { }

  ngOnInit() {

    this.metadataService.getWeapons().subscribe(
      (weapons: Weapon[]) => {
        weapons.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.weapons = weapons;

        this.weapons.map(
          (weapon: Weapon) => {
            // tslint:disable-next-line:max-line-length
            if (weapon.name !== 'Reach Grenade Launcher' && weapon.name !== 'SCORPION ANTI INFANTRY TURRET' && weapon.name !== 'Sentinel Beam') {
              this.weaponNameArray.push(+weapon.id);
            }
          }
        );
      }
    );

    this.route.params.subscribe(
      (params: Params) => {
        this.arenaService.getStats(params['id']).subscribe(
          (stats: ArenaStats) => {
            this.weaponId.nativeElement.value = 'Select a weapon';
            this.selectedWeapon = null;
            this.selectedArenaWeapon = null;

            this.arenaStats = stats;
            this.arenaWeapons = stats.Results[0].Result.ArenaStats.WeaponStats;

            this.arenaWeapons.map(
              (weapon: ArenaWeapon) => {
                this.arenaWeaponNameArray.push(weapon.WeaponId.StockId);
              }
            );

            this.usedWeaponsArray = _.intersection(this.weaponNameArray, this.arenaWeaponNameArray);

            this.weaponsList = this.weapons.filter(
              (weapon: Weapon) => (this.usedWeaponsArray.includes(+weapon.id))
            );

            this.totalKills = stats.Results[0].Result.ArenaStats.TotalKills;
            this.totalDeaths = stats.Results[0].Result.ArenaStats.TotalDeaths;
            this.totalAssists = stats.Results[0].Result.ArenaStats.TotalAssists;
            this.totalGamesPlayed = stats.Results[0].Result.ArenaStats.TotalGamesCompleted;
            this.totalGamesLost = stats.Results[0].Result.ArenaStats.TotalGamesLost;
            this.totalGamesWon = stats.Results[0].Result.ArenaStats.TotalGamesWon;
            this.winPercentage = +(this.totalGamesWon / this.totalGamesPlayed * 100).toFixed(1);
            this.totalAssassinations = stats.Results[0].Result.ArenaStats.TotalAssassinations;
            this.totalGrenadeKills = stats.Results[0].Result.ArenaStats.TotalGrenadeKills;
            this.totalMeleeKills = stats.Results[0].Result.ArenaStats.TotalMeleeKills;
            this.totalPowerWeaponKills = stats.Results[0].Result.ArenaStats.TotalPowerWeaponKills;
            this.totalGroundPoundKills = stats.Results[0].Result.ArenaStats.TotalGroundPoundKills;
            this.totalSpartanChargeKills = stats.Results[0].Result.ArenaStats.TotalShoulderBashKills;
            this.totalHeadshots = stats.Results[0].Result.ArenaStats.TotalHeadshots;

            this.kdaRatio = +(((this.totalKills + (this.totalAssists / 3)) - this.totalDeaths) / this.totalGamesPlayed).toFixed(1);
          }
        );
      }
    );


  }

  show() {

    this.selectedArenaWeapon = this.arenaWeapons.filter(
      (weapon: ArenaWeapon) => (+weapon.WeaponId.StockId === +this.weaponId.nativeElement.value)
    );

    this.selectedWeapon = this.weapons.filter(
      (weapon: Weapon) => (weapon.id === this.weaponId.nativeElement.value)
    );

    // tslint:disable-next-line:max-line-length
    this.accuracy = +(this.selectedArenaWeapon[0].TotalShotsLanded / this.selectedArenaWeapon[0].TotalShotsFired * 100).toFixed(2);
  }

}
