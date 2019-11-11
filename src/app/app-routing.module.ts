import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardListComponent } from './dashboard/components/dashboard-list/dashboard-list.component';
import { FormPageComponent } from './form/components/form-page/form-page.component';
import { ROUTES } from './core/consts'
import { UserDataResolverService } from './core/user-data-resolver.service';


const routes: Routes = [
  { path: '',
    redirectTo: ROUTES.dashboard,
    pathMatch: 'full'
  },
  { 
    path: ROUTES.dashboard,
    component: DashboardListComponent,
    data: {
      title: 'Dashboard'
    }
  },
  { 
    path: ROUTES.form,
    component: FormPageComponent,
    data: {
      title: 'New Request'
    },
    resolve: {
      userData: UserDataResolverService
    }
  },
  { 
    path: ROUTES.form + '/:id',
    component: FormPageComponent,
    data: {
      title: 'Edit Request'
    },
    resolve: {
      userData: UserDataResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
