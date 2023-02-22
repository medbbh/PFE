import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVaccinComponent } from './new-vaccin.component';

describe('NewVaccinComponent', () => {
  let component: NewVaccinComponent;
  let fixture: ComponentFixture<NewVaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVaccinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
