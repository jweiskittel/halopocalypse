import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../services/metadata.service';
import { Map } from '../models/maps.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps: Map[];

  constructor(private mapService: MetadataService) { }

  ngOnInit() {
    this.mapService.getMaps().subscribe(
      (maps: Map[]) => {
        this.maps = maps;
      }
    );
  }

}
