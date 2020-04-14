import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  university: string;
  Examination: string;
  institute: string;
  passoutyear: number;
  cgpa:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Examination: 'SSC', university: 'State Board Of Maharashtra', institute: 'R.K.M. School,Kalwan', passoutyear: 2012,cgpa:'72.65%'},
  {Examination: 'HSC', university: 'University of Pune', institute: 'R.K.M.college,Kalwan', passoutyear: 2014,cgpa:'61.54%'},
  {Examination: 'Bsc.computer sci', university: 'University of Pune', institute: 'R.Y.K.college,Computer science department,Nashik', passoutyear: 2017,cgpa:'60.00%'},
  {Examination: 'Master of computer application', university: 'University of Pune', institute:'PUCSD', passoutyear: 2020,cgpa:'4.5'},
  
];
@Component({
  selector: 'app-academicdetails',
  templateUrl: './academicdetails.component.html',
  styleUrls: ['./academicdetails.component.css']
})
export class AcademicdetailsComponent implements OnInit {
	 displayedColumns: string[] = ['Examination', 'university', 'institute', 'passoutyear','cgpa'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
