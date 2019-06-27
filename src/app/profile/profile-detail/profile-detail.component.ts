import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile;
  emblem: string;
  spartan: string;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
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
