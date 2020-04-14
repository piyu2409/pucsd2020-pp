import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { CreateuserComponent } from './createuser/createuser.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {  ReactiveFormsModule } from '@angular/forms';
import { UpdateuserComponent } from './updateuser/updateuser.component';
const routes: Routes = [
            {path:'',component:HomepageComponent},
            {path:'createuser',component:CreateuserComponent},
            {path:'updateuser',component:UpdateuserComponent}];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateuserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(routes)
  ],
  exports:[
            MatFormFieldModule,
            MatInputModule,
            MatSliderModule,
            MatButtonModule,
            MatToolbarModule,
            MatTableModule,
            MatCardModule,
            MatSnackBarModule 
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
