import { Component } from '@angular/core';
import { SalesCardComponent } from '../../sales-summary-card/sales-summary-card.component';
import { GroupedSalesComponent } from '../../grouped-sales-grid/grouped-sales-grid.component';



@Component({
  selector: 'app-dashboard',
  imports: [SalesCardComponent, GroupedSalesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
