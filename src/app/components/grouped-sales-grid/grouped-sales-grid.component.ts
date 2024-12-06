import { Component, Input, OnInit } from '@angular/core'; // Import OnInit
import { GroupedSale } from '../../models/app.types'; 
import { SalesService } from '../../services/sales.service'; 
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grouped-sales-grid',
  templateUrl: './grouped-sales-grid.component.html',
  styleUrls: ['./grouped-sales-grid.component.css'],
  imports: [DxDataGridModule]
})
export class GroupedSalesComponent implements OnInit {
  @Input() limit?: number;  
  @Input() url: string = '';
  @Input() rowClickUrl = '';
  groupedSales: GroupedSale[] = [];

  constructor(private salesService: SalesService, private router: Router) {}

  ngOnInit(): void {
    this.salesService.getGroupedSales(this.url, this.limit).subscribe(
      (data: GroupedSale[]) => {
        this.groupedSales = data; 
      },
      (error) => {
        console.error('Error fetching data', error); 
      }
    );
  }

  onRowClick(event: any) {
    const rowData = event.data;
     this.router.navigateByUrl(this.rowClickUrl + rowData.name, {
      state: { territoryId: rowData.id } 
    });
  }
}
