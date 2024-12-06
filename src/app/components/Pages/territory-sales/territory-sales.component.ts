import { Component, Input } from '@angular/core';
import { TerritoryProductSalesGridComponent } from '../../territory-product-sales-grid/territory-product-sales-grid.component';
import { ActivatedRoute } from '@angular/router';
import { SalesCardComponent } from "../../sales-summary-card/sales-summary-card.component";

@Component({
  selector: 'app-territory-sales',
  imports: [TerritoryProductSalesGridComponent, SalesCardComponent],
  templateUrl: './territory-sales.component.html',
  styleUrl: './territory-sales.component.css'
})
export class TerritorySalesComponent {
  
  territoryId: number = 0;
  territoryName: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.territoryId = history.state.territoryId;
    this.route.url.subscribe(urlSegments => {

      this.territoryName = urlSegments[urlSegments.length - 1].path;
    });
  }
}
