import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.companyService.getCompany(this.route.snapshot.params['id']).subscribe(
      (company: Company) => {
        this.company = company;
        console.log(this.company);
      }
    );
  }

}
