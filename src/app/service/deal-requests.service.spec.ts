import { TestBed } from '@angular/core/testing';

import { DealRequestsService } from './deal-requests.service';

describe('DealRequestsService', () => {
  let service: DealRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
