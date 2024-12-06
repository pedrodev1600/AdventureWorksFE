import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItem } from '../../../models/app.types';
import { ProductService } from '../../../services/product.service';
import { DxTextBoxModule, DxSwitchModule, DxNumberBoxModule  } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FormsModule,
    DxTextBoxModule, 
    DxSwitchModule,
    DxNumberBoxModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
productId: number = 0;
productName: string = '';
product!: ProductItem;
showDeleteConfirmation: boolean = false;
isNew: boolean = true;

constructor(private productService: ProductService ,private router: Router, private route: ActivatedRoute) {}

ngOnInit(): void {
  this.productId = history.state.productId;
  if (this.productId != null && this.productId > 0) {
    this.isNew = false;
    this.route.url.subscribe(urlSegments => {
      this.productName = urlSegments[urlSegments.length - 1].path;
      this.productService.getProductByName(this.productName).subscribe(
        (data) => this.product = data,
        (error) => console.error('Error fetching product:', error)
      );
    });
  } else {
    this.isNew = true;
    this.product = {
      productId: 0,
      name: '',
      productNumber: '',
      size: '',
      listPrice: 0,
      standardCost: 0,
      makeFlag: false,
      finishedGoodsFlag: false,
      safetyStockLevel: 0,
      reorderPoint: 0,
      daysToManufacture: 0
    };
  }
}

onSubmit(form: NgForm) {
  if (form.valid) {
    if (this.isNew) {
      this.onAdd();
    } else {
      this.onSave();
    }
  } else {
    // Highlight all invalid controls
    for (const controlKey in form.controls) {
      form.controls[controlKey].markAsTouched();
    }
  }
}

onSave() {
  this.productService.updateProduct(this.product).subscribe(
    (updatedProduct) => {
      alert('Product saved successfully!');
    },
    (error) => {
      console.error('Error updating product:', error);
    }
  );
}

onAdd() {
  this.productService.addProduct(this.product).subscribe(
    (newProduct) => {
      this.router.navigate(['/product-list']);
    },
    (error) => {
      console.error('Error adding product:', error);
    }
  );
}

onDelete() {
  this.showDeleteConfirmation = true;
}

onConfirmDelete() {
  const productId = this.product.productId;
  this.productService.deleteProduct(productId).subscribe(
    () => {
      this.router.navigate(['/product-list']); 
    },
    (error) => {
      console.error('Error deleting product:', error);
    }
  );
  this.showDeleteConfirmation = false;
}

onCancelDelete() {
  this.showDeleteConfirmation = false;
}

onCancel() {
  this.router.navigateByUrl('/product-list');
}

}
