import { Component, OnInit } from '@angular/core';
import { Map } from 'src/app/models/maps.model';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-arena-maps',
  templateUrl: './arena-maps.component.html',
  styleUrls: ['./arena-maps.component.css']
})
export class ArenaMapsComponent implements OnInit {
  maps: Map[] = [];
  arenaMaps: Map[] = [];

  constructor(private mapService: MetadataService) { }

  ngOnInit() {
    this.mapService.getMaps().subscribe(
      (maps: Map[]) => {
        maps.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.maps = maps.filter(
          (map: Map) => map.supportedGameModes !== null
        );
        this.arenaMaps = this.maps.filter(
          (map: Map) => map.supportedGameModes.includes('Arena')
        );
      }
    );
  }

}
