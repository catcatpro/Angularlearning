import { Injectable } from '@angular/core';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
@Injectable({
  providedIn: CustomerDashboardModule 
})
export class UserService {

  constructor() { }
}
