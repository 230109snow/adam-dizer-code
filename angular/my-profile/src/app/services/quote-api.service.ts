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
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Expose-Headers': 'pm-e, pm-h0, pm-h1, pm-h2, pm-h3, pm-o0, pm-o1, pm-o2, pm-o3',
        'Access-Control-Allow-Origin' : '*'
      }
    });
  }

}
