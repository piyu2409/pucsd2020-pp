import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../_services/apicall.service';
// import { MustMatch } from './must-match.validator';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  active:boolean=false;
  constructor(private apicallservice : ApicallService,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private router: Router) { }
  updateForm=this.formBuilder.group({
    id:[''],
    fnm:[''],
    lnm:[''],
    mail:[''],
    pwd:[''],
    cno:['']
  });
  dataSource:any ;
  ngOnInit(): void {}
  getdata(){
      this.apicallservice.getdata()
                                   .subscribe((res:any) => {
                        this.dataSource = new MatTableDataSource(res);
                });
    }
  openSnackBar(message,action){
    this._snackBar.open(message, action, {
      duration: 2000,
       verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }
  onupdate(uid){
    console.log(uid);
  	let userData = {
      "firstname": this.updateForm.value.fnm,
      "lastname": this.updateForm.value.lnm,
      "email": this.updateForm.value.mail,
      "password": this.updateForm.value.pwd,
      "contactno": this.updateForm.value.cno
    };
    console.log(userData)
    this.apicallservice.updatedata(userData,uid).subscribe(data => {
      this.openSnackBar("Successfully Updated", " 🎉")
    })
  }
  getById(id) {
    if (id.trim() == "") {
      console.log("called")
      this.getdata();
    }
    else {
      this.apicallservice.getById(id).subscribe((data: any[]) => {
        console.log(Object.keys(data).length)
        var stringData = '[' + JSON.stringify(data) + ']'
        var parseData = JSON.parse(stringData)
        this.dataSource= parseData;
        this.active=true;
        console.log(this.active);
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            this.openSnackBar("No User Found", " 😓")
            this.getdata();

            //Backend returns unsuccessful response codes such as 404, 500 etc.
            console.log('Backend returned status code: ', err.status);

            console.log('Response body:', err.error);
          }
        }
      )
    }
    // this.active=true;
    // console.log(this.active);
  }


}
