import { Component, OnInit  } from '@angular/core';
import { ProductGridComponent } from "../../product-grid/product-grid.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [ProductGridComponent, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
