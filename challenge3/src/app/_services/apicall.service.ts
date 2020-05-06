import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
	private REST_API_SERVER = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getdata() {
      			return this.http.get(this.REST_API_SERVER);
    		}
  setdata(data:any){
  				return this.http.post(this.REST_API_SERVER, data);
  			}
  deletedata(id) {
    return this.http.delete(this.REST_API_SERVER + '/' + id);
  }
  getById(id) {
    return this.http.get(this.REST_API_SERVER + '/' + id);
  }
  updatedata(data, id) {
    return this.http.put(this.REST_API_SERVER + '/' + id, data);
  }
  
  

}
