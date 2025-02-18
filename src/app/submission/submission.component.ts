import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
})
export class SubmissionComponent implements OnInit {
  submittedData: any = null;
  applicationStatus: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.submittedData = this.dataService.getSubmittedData();

    if (this.submittedData) {
      const ratings = [
        this.submittedData.pmsRatingOct23,
        this.submittedData.pmsRatingApr24,
        this.submittedData.pmsRatingOct24,
      ];
      const isAccepted = ratings.every((rating) => rating >= 3);

      this.applicationStatus = isAccepted ? 'PMS Approved' : 'PMS Not Approved';
    }
  }
}
