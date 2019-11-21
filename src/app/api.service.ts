import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bill } from './postdataObj';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  

  
  // ('Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTczODI4NDY3LCJqdGkiOiJhMTU0YTY4NGM1ZjY0NGI5YWFiMTZkYzViYTVkNDI0NiIsInVzZXJfaWQiOjF9.yd8cOZ0BZ6u01hCDBq0uOae-rJqESOF8dGa_a8bytRk');


  generateBillUrl: string = 'http://jambopay.herokuapp.com/api/GenerateBill/';


  constructor(public http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 


  generateBill(bill): Observable<Bill> {
    return this.http.post<Bill>(this.generateBillUrl, JSON.stringify(bill), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

  }


