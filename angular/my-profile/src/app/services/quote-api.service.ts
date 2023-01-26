import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quoteurl, quoteurl2 } from 'src/const-quote-api';
import { urlProxy } from 'src/const-api';
import quotes from 'src/app/services/dummyQuotes.json';

interface QuoteType
{
  
}
export enum QType{
  Zen = 1,
  Dummy = 2
}

interface QuoteObj {
  q:String; 
  a:String; 
  c:String; 
  h:String;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  quoteList : QuoteObj[] = [];
  hasLoadedQuotes: boolean = false;


  constructor(private http: HttpClient) 
  {
    this.ngOnInit();
  }

  ngOnInit() : void
  {
    this.initalizeQuotes();
  }

  getQuote() : Observable<any>
  {
    // use this for multi api calls
    // https://nehalist.io/multiple-http-requests-in-angular/
    // forkJoin([]).subscribe()

    console.log('here2.0')
    return this.http.get(urlProxy  +quoteurl, {
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


  initalizeQuotes() : void
  {
    console.log("initalizing quotes")
    this.quoteList = quotes;
    this.hasLoadedQuotes = true;
  }

  getNewQuote() : any
  {
    console.log("getNewQuote");
    let min : number = 0;
    let max : number = this.quoteList.length;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
    console.log("rand", randomNumber, "min", min,"max", max);
    console.log(this.quoteList.slice(randomNumber, randomNumber+1));
    console.log(this.quoteList.slice(randomNumber, randomNumber+1)[0]);
    console.log(this.quoteList.slice(randomNumber, randomNumber+1)[0].q);
    return this.quoteList.slice(randomNumber, randomNumber+1)[0].q;
  }

  async getDummyQuotes(num : any)
  {
    console.log("quote.quoteservice.getDummyQuotes()")
    let qArr : any[] = [];

    for (let i=0; i < num.length; i++)
    {
      this.getDummyQuote().then(data =>
        {
          console.log("returning from quote.quoteservice.getDummyQuote()",data)
          qArr+=data;
        });
    }

    return qArr;
  }
  async getDummyQuote()
  {
    if (!this.hasLoadedQuotes)
    {this.initalizeQuotes();}

    return this.getNewQuote();
  }  
}