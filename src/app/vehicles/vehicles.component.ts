import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../services/metadata.service';
import { Vehicles } from '../models/vehicles.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  unsc: Vehicles[];
  covenant: Vehicles[];
  promethean: Vehicles[];

  constructor(private metadataService: MetadataService) { }

  ngOnInit() {
    this.metadataService.getVehicles().subscribe(
      (vehicles: Vehicles[]) => {
        this.unsc = vehicles.filter(
          vehicle => vehicle.name === 'Scorpion' || vehicle.name === 'Mantis' ||
          vehicle.name === 'Warthog' || vehicle.name === 'Mongoose' || vehicle.name === 'Wasp'
        );
        this.covenant = vehicles.filter(
          vehicle => vehicle.name === 'Banshee' || vehicle.name === 'Wraith' || vehicle.name === 'Ghost'
        );
        this.promethean = vehicles.filter(
          vehicle => vehicle.name === 'Phaeton'
        );
      }
    );
  }

}
