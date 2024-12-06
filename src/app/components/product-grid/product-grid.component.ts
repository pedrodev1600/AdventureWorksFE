import { Component, Input } from '@angular/core';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { ProductListItem } from '../../models/app.types';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  imports: [DxDataGridModule, DxTemplateModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  products: ProductListItem[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: ProductListItem[]) => {
        this.products = data; 
      },
      (error) => {
        console.error('Error fetching data', error); 
      }
    );
  }

  onRowClick(event: any) {
    const rowData = event.data;
     this.router.navigateByUrl('product/' + rowData.name, {
      state: { productId: rowData.productID } 
    });
  }
}
