import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';
import { ViewlistComponent } from './components/viewlist/viewlist.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view-list',
    pathMatch:'full'
  },
  {
    path:'view-list',
    component:ViewlistComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager","user","editor"]}
  },
  {
    path:'view-details',
    component:ViewdetailsComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager","user","editor"]}
  },
  {
    path:'view-details/:freelancerId',
    component:ViewdetailsComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager","user","editor"]}
  },
  {
    path:'view-details:/freelancer',
    component:ViewdetailsComponent,
    canActivate:[AuthGuard],
    data:{roles:["manager"]}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
