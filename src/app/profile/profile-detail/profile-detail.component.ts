import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ArenaStatsService } from 'src/app/services/arena-stats.service';
import { ArenaStats } from 'src/app/models/arena-stats.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile;
  emblem: string;
  spartan: string;
  spartanRank: number;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router,
    private arenaService: ArenaStatsService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.arenaService.getStats(params['id']).subscribe(
          (stats: ArenaStats) => {
            this.spartanRank = stats.Results[0].Result.SpartanRank;
          }
        );
        this.profileService.getProfile(params['id']).subscribe(
          (profile: Profile) => {
            this.profile = profile;
          },
          (err: HttpErrorResponse) => {
            alert('Spartan ' + err.statusText + '!');
          }
        );
        this.profileService.getEmblem(params['id']).subscribe(
          (emblem) => {
          },
          (err: HttpErrorResponse) => {
            if (err.status === 200) {
              this.emblem = err.headers.get('X-Final-Url');
            }
          }
        );
        this.profileService.getSpartan(params['id']).subscribe(
          (spartan) => {
          },
          (err: HttpErrorResponse) => {
            if (err.status === 200) {
              this.spartan = err.headers.get('X-Final-Url');
            }
          }
        );
      }
    );
  }

  loadCompany(company: string) {
    this.router.navigate(['company', company], {queryParamsHandling: 'preserve'});
  }

}
