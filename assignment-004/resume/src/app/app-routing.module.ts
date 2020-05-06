import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicdetailsComponent } from './academicdetails/academicdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnicalskilsComponent } from './technicalskils/technicalskils.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{ path:'academicdetails', component:AcademicdetailsComponent},
						{ path:'projects', component:ProjectsComponent},
						 { path:'technicalskils', component:TechnicalskilsComponent},
						 { path:'profile', component:ProfileComponent}
						];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
