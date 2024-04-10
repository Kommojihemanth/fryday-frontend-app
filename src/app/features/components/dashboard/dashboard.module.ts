import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './component/dashboard-main/dashboard-main.component';
import { ProfileButtonComponent } from './component/profile-button/profile-button.component';


@NgModule({
  declarations: [
    DashboardMainComponent,
    ProfileButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProfileButtonComponent, DashboardMainComponent],
})
export class DashboardModule { }
