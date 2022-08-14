import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalDataReviewService {
  private url: string;

  constructor(
    private http: HttpClient
  ){
    this.url = "https://catfact.ninja/fact";
  }

  getResponse() {
    return this.http.get(this.url)
  }
}
