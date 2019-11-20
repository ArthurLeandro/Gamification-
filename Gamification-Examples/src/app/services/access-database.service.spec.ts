import { TestBed } from '@angular/core/testing';

import { AccessDatabaseService } from './access-database.service';

describe('AccessDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessDatabaseService = TestBed.get(AccessDatabaseService);
    expect(service).toBeTruthy();
  });
});
