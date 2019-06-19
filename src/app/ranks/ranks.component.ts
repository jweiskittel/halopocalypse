import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../services/metadata.service';
import { CSRDesignations } from '../models/csr-designations.model';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {

  constructor(private metadataService: MetadataService) { }
  lowRanks: CSRDesignations[];
  highRanks: CSRDesignations[];

  ngOnInit() {
    this.metadataService.getCSRDesignations().subscribe(
      (ranks: CSRDesignations[]) => {
        this.lowRanks = ranks.filter(
          rank => rank.name !== 'Unranked' && rank.name !== 'Onyx' && rank.name !== 'Champion'
        );
        console.log(this.lowRanks);
        this.highRanks = ranks.filter(
          rank => rank.name === 'Onyx' || rank.name === 'Champion'
        );
        console.log(this.highRanks);
      }
    );
  }

}
