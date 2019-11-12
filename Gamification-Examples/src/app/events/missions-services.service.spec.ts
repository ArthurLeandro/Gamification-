import { TestBed } from '@angular/core/testing';

import { MissionsServicesService } from './missions-services.service';

describe('MissionsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionsServicesService = TestBed.get(MissionsServicesService);
    expect(service).toBeTruthy();
  });
});
