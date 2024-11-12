import { TestBed } from '@angular/core/testing';

import { EvacuationPlansService } from './evacuation-plans.service';

describe('EvacuationPlansService', () => {
  let service: EvacuationPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvacuationPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
