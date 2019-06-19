import { Component, OnInit } from '@angular/core';
import { Enemies } from '../models/enemies.model';
import { MetadataService } from '../services/metadata.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.css']
})
export class EnemiesComponent implements OnInit {
  covenant: Enemies[];
  promethean: Enemies[];

  constructor(private metadataService: MetadataService) { }

  ngOnInit() {
    this.metadataService.getEnemies().subscribe(
      (enemies: Enemies[]) => {
        enemies.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.covenant = enemies.filter(
          enemy => enemy.faction === 'Covenant'
        );
        this.promethean = enemies.filter(
          enemy => enemy.faction === 'Promethean'
        );
      }
    );
  }

}
