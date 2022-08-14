import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App component imports
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
