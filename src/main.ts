import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { DxDataGridModule, DxButtonModule, DxTextBoxModule, DxSwitchModule, DxNumberBoxModule } from 'devextreme-angular';
import { Component, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { DashboardComponent } from './app/components/Pages/dashboard/dashboard.component';
import { TerritorySalesComponent } from './app/components/Pages/territory-sales/territory-sales.component';
import { ProductsListComponent } from './app/components/Pages/products-list/products-list.component';
import { ProductComponent } from './app/components/Pages/product/product.component';



// Define the routes for the application
const routes = [
  { path: '', component: DashboardComponent },
  { path: 'territory-sales/:territoryName', component: TerritorySalesComponent },
  { path: 'product-list', component: ProductsListComponent},
  { path: 'product/:productName', component: ProductComponent},
  { path: 'product/new', component: ProductComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),  
    importProvidersFrom(DxDataGridModule, DxButtonModule, DxTextBoxModule, DxSwitchModule, DxNumberBoxModule, RouterModule ), 
  ]
}).catch(err => console.error(err));