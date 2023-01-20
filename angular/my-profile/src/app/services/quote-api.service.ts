import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quoteurl, quoteurl2 } from 'src/quote-api-const';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  constructor(private http: HttpClient) { }

  getQuote() : Observable<any>
  {
    // use this for multi api calls
    // https://nehalist.io/multiple-http-requests-in-angular/
    // forkJoin([]).subscribe()

    console.log('here2.0')
    return this.http.get(quoteurl, {
      headers: {
        'content-type' : 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
   }

   async getApiTest() : Promise<any> {
    try {
      const response = await fetch(quoteurl, {mode: 'cors'});
      var data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

}