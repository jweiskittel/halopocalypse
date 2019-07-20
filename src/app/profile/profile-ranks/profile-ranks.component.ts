import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';
import { Seasons } from 'src/app/models/seasons.model';
import { ArenaStatsService } from 'src/app/services/arena-stats.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ArenaStats } from 'src/app/models/arena-stats.model';
import { CSRDesignations } from '../../models/csr-designations.model';
import { Playlists } from 'src/app/models/playlists.model';

@Component({
  selector: 'app-profile-ranks',
  templateUrl: './profile-ranks.component.html',
  styleUrls: ['./profile-ranks.component.css']
})
export class ProfileRanksComponent implements OnInit {
  seasons: Seasons[];
  ranks: CSRDesignations[] = [];
  playlists: Playlists[] = [];
  stats: ArenaStats;
  statsPlaylists: any[] = [];
  rankedPlaylists: Playlists[] = [];
  actualRanks: {
    iconImageUrl: string,
    id: number,
    contentId: string
  }[] = [];
  pushPlaylist: Playlists;
  pushRanks: {
    iconImageUrl: string,
    id: number,
    contentId: string
  };
  csr: {
    csr: number,
    rank: number
  }[] = [];

  constructor(
    private metadataService: MetadataService,
    private arenaService: ArenaStatsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.metadataService.getCSRDesignations().subscribe(
      (ranks: CSRDesignations[]) => {
        this.ranks = ranks;
      }
    );

    this.metadataService.getPlaylists().subscribe(
      (playlists: Playlists[]) => {
        this.playlists = playlists;
      }
    );

    this.route.params.subscribe(
      (params: Params) => {
        this.arenaService.getStats(params['id']).subscribe(
          (stats: ArenaStats) => {
            this.rankedPlaylists = [];
            this.actualRanks = [];
            this.csr = [];
            this.statsPlaylists = [];
            this.stats = stats;
            console.log(this.stats);
            setTimeout(() => {
              this.stats.Results[0].Result.ArenaStats.ArenaPlaylistStats.map(
                (arenaStats) => {
                  if (arenaStats.Csr !== null) {
                    this.statsPlaylists.push(arenaStats);
                    this.pushPlaylist = this.playlists.find(
                      (playlist: Playlists) => playlist.id === arenaStats.PlaylistId
                    );
                    this.csr.push({csr: arenaStats.Csr.Csr, rank: arenaStats.Csr.Rank});
                    this.rankedPlaylists.push(this.pushPlaylist);
                    this.ranks.map(
                      (rank: CSRDesignations) => {
                        if (+rank.id === +arenaStats.Csr.DesignationId) {
                          this.pushRanks = rank.tiers.find(
                            tier => +tier.id === +arenaStats.Csr.Tier
                          );
                          this.actualRanks.push(this.pushRanks);
                        }
                      }
                    );
                  }
            }, 2000);
              }
            );
          }
        );
      }
    );

  }

}
