import { TestBed } from '@angular/core/testing';

import { LevelServiceService } from './level-service.service';

describe('LevelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevelServiceService = TestBed.get(LevelServiceService);
    expect(service).toBeTruthy();
  });
});
