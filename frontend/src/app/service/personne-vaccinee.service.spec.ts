import { TestBed } from '@angular/core/testing';

import { PersonneVaccineeService } from './personne-vaccinee.service';

describe('PersonneVaccineeService', () => {
  let service: PersonneVaccineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneVaccineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
