import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryProductSalesGridComponent } from './territory-product-sales-grid.component';

describe('TerritoryProductSalesGridComponent', () => {
  let component: TerritoryProductSalesGridComponent;
  let fixture: ComponentFixture<TerritoryProductSalesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerritoryProductSalesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerritoryProductSalesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
