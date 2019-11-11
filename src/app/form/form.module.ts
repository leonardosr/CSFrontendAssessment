import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './components/form-page/form-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCurrencyModule } from "ngx-currency";
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [FormPageComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxCurrencyModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class FormModule { }
