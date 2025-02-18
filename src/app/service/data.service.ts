import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private submittedData: any = null;

  setSubmittedData(data: any) {
    this.submittedData = data;
  }

  getSubmittedData() {
    return this.submittedData;
  }
}
