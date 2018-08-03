import { TestBed, inject } from '@angular/core/testing';

import { SuplliesService } from './supllies.service';

describe('SuplliesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuplliesService]
    });
  });

  it('should be created', inject([SuplliesService], (service: SuplliesService) => {
    expect(service).toBeTruthy();
  }));
});
