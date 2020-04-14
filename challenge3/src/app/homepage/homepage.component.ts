import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../_services/apicall.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	data:any;
	email:any;
  firstname: string="hiii";

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','contactNo','edit','delete'];
  dataSource:any ;
  constructor(private apicallservice : ApicallService,
              private router: Router,
              private _snackBar: MatSnackBar,) 
              {
                this.getdata();
              }

    getdata(){
      this.apicallservice.getdata()
                                   .subscribe((res:any) => {
                        this.dataSource = new MatTableDataSource(res);
                });


    }
  ngOnInit(): void {}
    onupdate(){
    this.router.navigate(['./updateuser']);
    console.log("its update page");
   }

   routToCreate(){
    this.router.navigate(['./createuser']);
    console.log("routing");
   } 
   openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }
   ondelete(uid){
    this.apicallservice.deletedata(uid).subscribe(data => {
      this.openSnackBar("User Deleted", "👍🏻");
      this.getdata();
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
  }


}
