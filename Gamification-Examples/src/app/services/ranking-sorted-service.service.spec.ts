import { TestBed } from '@angular/core/testing';

import { RankingSortedServiceService } from './ranking-sorted-service.service';

describe('RankingSortedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankingSortedServiceService = TestBed.get(RankingSortedServiceService);
    expect(service).toBeTruthy();
  });
});
