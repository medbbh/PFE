import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCentreComponent } from './new-centre.component';

describe('NewCentreComponent', () => {
  let component: NewCentreComponent;
  let fixture: ComponentFixture<NewCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
