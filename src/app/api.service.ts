import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bill,Bills  } from './postdataObj';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  generateBillUrl: string = 'http://jambopay.herokuapp.com/api/GenerateBill/';

  billUrl: string ='https://jambopay.herokuapp.com/api/GetMerchantBills/';

  RevStreamUrl: string = 'http://jambopay.herokuapp.com/api/GetMerchantRevenueStreams/';

  RevenueStreamsUrl: string = 'https://jambopay.herokuapp.com/api/GetMerchantRevenueStreams/';

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

  getBills(): Observable<Bills[]>{
    return this.http.get<Bills[]>(this.billUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getRevStream(): Observable<any[]>{
    return this.http.get<any[]>(this.RevStreamUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getRevenueStreams(): Observable<any[]>{
    return this.http.get<any[]>(this.RevenueStreamsUrl)
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


