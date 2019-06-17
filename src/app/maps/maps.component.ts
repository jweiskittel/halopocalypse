import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps.service';
import { Map } from '../models/maps.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps: Map[];

  constructor(private mapService: MapsService) { }

  ngOnInit() {
    this.mapService.getMaps().subscribe(
      (maps: Map[]) => {
        this.maps = maps;
        console.log(this.maps[0].supportedGameModes);
      }
    );
  }

}
