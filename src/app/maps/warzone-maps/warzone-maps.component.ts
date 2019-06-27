import { Component, OnInit } from '@angular/core';
import { Map } from 'src/app/models/maps.model';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-warzone-maps',
  templateUrl: './warzone-maps.component.html',
  styleUrls: ['./warzone-maps.component.css']
})
export class WarzoneMapsComponent implements OnInit {
  maps: Map[] = [];
  warzoneMaps: Map[] = [];

  constructor(private mapService: MetadataService) { }

  ngOnInit() {
    this.mapService.getMaps().subscribe(
      (maps: Map[]) => {
        maps.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.maps = maps.filter(
          (map: Map) => map.supportedGameModes !== null
        );
        this.warzoneMaps = this.maps.filter(
          (map: Map) => map.supportedGameModes.includes('Warzone')
        );
      }
    );
  }

}
