import { TestBed, inject } from '@angular/core/testing';

import { NanoService } from './nano.service';

describe('NanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NanoService]
    });
  });

  it('should be created', inject([NanoService], (service: NanoService) => {
    expect(service).toBeTruthy();
  }));
});
