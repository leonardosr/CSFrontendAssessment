import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardListComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    CoreModule,
    HttpClientModule,
    RouterModule
  ]
})
export class DashboardModule { }
