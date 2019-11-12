import { TestBed } from '@angular/core/testing';

import { TestHeapService } from './test-heap.service';

describe('TestHeapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestHeapService = TestBed.get(TestHeapService);
    expect(service).toBeTruthy();
  });
});
