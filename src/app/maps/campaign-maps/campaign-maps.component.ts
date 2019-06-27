import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';
import { CampaignMissions } from 'src/app/models/campaign-missions.model';

@Component({
  selector: 'app-campaign-maps',
  templateUrl: './campaign-maps.component.html',
  styleUrls: ['./campaign-maps.component.css']
})
export class CampaignMapsComponent implements OnInit {
  campaignMissions: CampaignMissions[] = [];

  constructor(private metadataService: MetadataService) { }

  ngOnInit() {
    this.metadataService.getCampaignMissions().subscribe(
      (missions: CampaignMissions[]) => {
        this.campaignMissions = missions;
        console.log(this.campaignMissions);
      }
    );
  }

}
