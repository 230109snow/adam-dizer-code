import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quoteurl } from 'src/quote-api-const';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  constructor(private http: HttpClient) { }

  getQuote() : Observable<any>
  {
    const url = quoteurl
    return this.http.get(url, {});
  }

}
