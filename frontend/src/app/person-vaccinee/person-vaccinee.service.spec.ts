import { TestBed } from '@angular/core/testing';

import { PersonVaccineeService } from './person-vaccinee.service';

describe('PersonVaccineeService', () => {
  let service: PersonVaccineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonVaccineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
