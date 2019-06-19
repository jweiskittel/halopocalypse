import { Component, OnInit } from '@angular/core';
import { Weapon } from '../models/weapons.model';
import { MetadataService } from '../services/metadata.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  weapons: Weapon[];
  grenades: Weapon[];

  constructor(private metadataService: MetadataService) { }

  ngOnInit() {
    this.metadataService.getWeapons().subscribe(
      (weapons: Weapon[]) => {
        console.log(weapons);
        weapons.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.weapons = weapons.filter(
          weapon => (weapon.type === 'Standard' || weapon.type === 'Power')
          && weapon.name !== 'Reach Grenade Launcher' && weapon.name !== 'Sentinel Beam');
        this.grenades = weapons.filter(
          weapon => weapon.type === 'Grenade'
        );
      }
    );
  }


}
