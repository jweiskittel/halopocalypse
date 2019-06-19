import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArenaStatsService } from '../../services/arena-stats.service';
import { ArenaStats } from '../../models/arena-stats.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Weapon } from 'src/app/models/weapons.model';
import { MetadataService } from 'src/app/services/metadata.service';
import { ArenaWeapon } from 'src/app/models/arena-weapon.model';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {
  arenaStats: ArenaStats;
  // weapons: [{ WeaponId:
  //   { StockId: number;
  //     Attachments: [number];
  //   };
  //   TotalShotsFired: number;
  //   TotalShotsLanded: number;
  //   TotalHeadshots: number;
  //   TotalKills: number;
  //   TotalDamageDealt: number;
  //   TotalPossessionTime: string; }];
  weapons: Weapon[];
  arenaWeapons: ArenaWeapon[];
  @ViewChild('weaponId') weaponId: ElementRef;
  selectedWeapon: Weapon[];
  selectedArenaWeapon: ArenaWeapon[];

  constructor(
      private arenaService: ArenaStatsService,
      private route: ActivatedRoute,
      private metadataService: MetadataService
      ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.arenaService.getStats(params['id']).subscribe(
          (stats: ArenaStats) => {
            this.arenaStats = stats;
            console.log(this.arenaStats);
            this.arenaWeapons = stats.Results[0].Result.ArenaStats.WeaponStats;
            console.log(this.arenaWeapons);
          }
        );
      }
    );

    this.metadataService.getWeapons().subscribe(
      (weapons: Weapon[]) => {
        weapons.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.weapons = weapons;
      }
    );

  }

  show() {
    console.log(this.weaponId.nativeElement.value);
    this.selectedArenaWeapon = this.arenaWeapons.filter(
      (weapon: ArenaWeapon) => (+weapon.WeaponId.StockId === +this.weaponId.nativeElement.value)
    );
    this.selectedWeapon = this.weapons.filter(
      (weapon: Weapon) => (weapon.id === this.weaponId.nativeElement.value)
    );
    console.log(this.selectedWeapon);
    console.log(this.selectedArenaWeapon);
  }

}
