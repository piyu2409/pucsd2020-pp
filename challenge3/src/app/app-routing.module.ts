import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'createuser',component:CreateuserComponent},
						{path:'',component:HomepageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
