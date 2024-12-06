import { Routes } from '@angular/router';
import { TerritorySalesDetailsComponent } from './components/territory-sales-details/territory-sales-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
    {
      path: 'territory-sales-details',
      component: TerritorySalesDetailsComponent
    }
  ];
