import { Injectable } from '@angular/core';
import { Employe } from '../interfaces/employe';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeService {
  url: string = 'http://localhost:8080/employes/'
  employes: Array<Employe> = new Array<Employe>();
  constructor(private http: HttpClient) { }
  
  getAllEmployes() {
    console.log("this.url : " + this.url);
    let API_URL = `${this.url}` + "search";
    console.log("API_URL : " + API_URL);
    return this.http.get(API_URL);
  }
  addE(data: Employe): Observable<any> {
    let API_URL = `${this.url}` + "addEmploye";
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  deleteE(id: string): Observable<any> {
    var API_URL = `${this.url}` + "deleteEmploye" + `/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  getE(id: string): Observable<any> {
    let API_URL = `${this.url}` + "selectEmploye" + `/${id}`;
    console.log("API_URL select : ", API_URL);
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  updateE(id: string, data: Employe): Observable<any> {
    let API_URL = `${this.url}` + "updateEmploye" + `/${id}`;
    console.log("API_URL update : ", API_URL);
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
