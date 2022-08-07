import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  question_description: string;

  constructor() {
    this.question_description = "This is a test description";
  }

  ngOnInit(): void {

  }
}
