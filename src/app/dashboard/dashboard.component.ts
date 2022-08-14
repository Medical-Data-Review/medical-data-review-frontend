import { Component, OnInit } from '@angular/core';
import { MedicalDataReviewService } from '../medical-data-review.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  question$: Question;

  constructor(private medicalReviewService: MedicalDataReviewService) {
    this.medicalReviewService.getResponse().subscribe((response: any) => {
      this.question$.description = response.fact
    });
  }

  ngOnInit(): void {

  }
}
