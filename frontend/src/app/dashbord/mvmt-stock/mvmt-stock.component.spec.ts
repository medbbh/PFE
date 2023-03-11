import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvmtStockComponent } from './mvmt-stock.component';

describe('MvmtStockComponent', () => {
  let component: MvmtStockComponent;
  let fixture: ComponentFixture<MvmtStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvmtStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvmtStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
