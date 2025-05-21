// heroes-app\src\app\core\heroe-data.service.spec.ts

import { TestBed } from '@angular/core/testing';

import { HeroDataService } from './heroe-data.service';

describe('HeroeDataService', () => {
  let service: HeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
