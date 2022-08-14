import { TestBed } from '@angular/core/testing';

import { MedicalDataReviewService } from './medical-data-review.service';

describe('MedicalDataReviewService', () => {
  let service: MedicalDataReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalDataReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
