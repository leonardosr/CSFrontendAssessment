import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormModule } from './form/form.module';
import { UserDataResolverService } from './core/user-data-resolver.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    FormModule,
    AppRoutingModule
  ],
  providers: [ UserDataResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
