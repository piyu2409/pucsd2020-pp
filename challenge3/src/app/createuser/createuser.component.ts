import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../_services/apicall.service';
// import { MustMatch } from './must-match.validator';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

	data:any=[];
	ldt:any=[];

  // registerForm:FormGroup;
  constructor(private apicallservice : ApicallService,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private router: Router) { }
  registerForm=this.formBuilder.group({
    fnm:['',[Validators.required, Validators.maxLength(100)]],
    lnm:['',[Validators.required, Validators.maxLength(100)]],
    mail:['',[Validators.required, Validators.email, Validators.maxLength(100)]],
    pwd:['',[Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]],
    cno:['',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  });

  ngOnInit(): void {}
  
  openSnackBar(message,action) {
    this._snackBar.open(message, action, {
      duration: 2000,
       verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }
  onSubmit(){
  	let userData = {
      "firstname": this.registerForm.value.fnm,
      "lastname": this.registerForm.value.lnm,
      "email": this.registerForm.value.mail,
      "password": this.registerForm.value.pwd,
      "contactno": this.registerForm.value.cno
    };
    if (this.registerForm.invalid) {

      return;
    }
    console.log(userData)
    this.apicallservice.setdata(userData).subscribe(data => {
      this.openSnackBar("New User Added "," 🎉")
    })
    this.registerForm.reset();
  	
  }
  
}
