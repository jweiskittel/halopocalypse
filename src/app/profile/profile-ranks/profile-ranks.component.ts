import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';
import { Seasons } from 'src/app/models/seasons.model';
import { CSRDesignations } from 'src/app/models/csr-designations.model';
import { ArenaStatsService } from 'src/app/services/arena-stats.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ArenaStats } from 'src/app/models/arena-stats.model';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-profile-ranks',
  templateUrl: './profile-ranks.component.html',
  styleUrls: ['./profile-ranks.component.css']
})
export class ProfileRanksComponent implements OnInit {
  seasons: Seasons[];
  ranks: CSRDesignations[];
  stats: ArenaStats;

  constructor(
    private metadataService: MetadataService,
    private arenaService: ArenaStatsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.metadataService.getCSRDesignations().subscribe(
      (ranks: CSRDesignations[]) => {
        this.ranks = ranks;
        // console.log(ranks);
      }
    );

    this.route.params.subscribe(
      (params: Params) => {
        this.arenaService.getStats(params['id']).subscribe(
          (stats: ArenaStats) => {
            this.stats = stats;
          }
        );
        // this.metadataService.getSeasons().subscribe(
        //   (seasons: Seasons[]) => {
        //     this.seasons = seasons;
        //     console.log(this.seasons);
        //     setTimeout(() => {
        //       this.thisSeason = this.seasons.filter(
        //         (season: Seasons) => (season.id === this.stats.Results[0].Result.ArenaStats.ArenaPlaylistStatsSeasonId)
        //       );
        //       console.log(this.thisSeason);
        //     }, 400);
        //   }
        // );
      }
    );

  }

}
