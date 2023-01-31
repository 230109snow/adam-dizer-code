import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { quoteurl, quoteurl2 } from 'src/const-quote-api';
import { urlProxy } from 'src/const-api';
import dummyQuotes from 'src/app/services/dummyQuotes.json';

export interface QuoteRequest
{
  type : QType;
}
export enum QType{
   Dummy = 1,
   Zen = 2,
   Norris = 3
}


interface DummyQuoteObj {
  q:string; 
  a:string; 
  c:string; 
  h:string;
}

interface ZenQuoteObj {
  q:string; 
  a:string; 
  c:string; 
  h:string;
}

interface NorrisQuoteObj {
  q:string; 
}

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  dummyQuoteList : ZenQuoteObj[] = [];
  zenQuoteList : ZenQuoteObj[] = [];
  norrisQuoteList : NorrisQuoteObj[] = [];

  hasLoadedDummyQuotes: boolean = false;
  hasLoadedZenQuotes: boolean = false;
  hasLoadedNorrisQuotes: boolean = false;

  constructor(private http: HttpClient) 
  {
    this.ngOnInit();
  }

  ngOnInit() : void
  {
    //this.initalizeQuotes();
  }

  getQuote(request : QType) : Observable<any>
  {
      console.log("quote-api.service.getQuote()");
      switch (request)
      {
        case QType.Dummy:
          if (!this.hasLoadedDummyQuotes)
            this.loadDummyQuotes();
          break;

        case QType.Zen:
          if (!this.hasLoadedZenQuotes)
            this.loadZenQuotes().subscribe((data:any) =>
            {
              console.log(data);
              this.zenQuoteList = data;
              this.hasLoadedZenQuotes = true;
              return this.selectRandomQuote(request);
            });
          else
            return of(this.selectRandomQuote(request));
          break;

        case QType.Norris:
          if (!this.hasLoadedNorrisQuotes)
            this.loadNorrisQuotes();
          break;
        default:
          break;
      }

      

      return of("getting quote...");
      
    }   


    selectRandomQuote(request : QType) : string
    {
      console.log("quote-api.service.selectRandomQuote()");
      let min : number = 0;
      let max : number = 0; 
      let randomNumber = 0;
      
      switch (request)
      {
        case QType.Dummy:
          max = this.dummyQuoteList.length;
          randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
          return this.dummyQuoteList.slice(randomNumber, randomNumber+1)[0].q;
        case QType.Zen:
          max = this.zenQuoteList.length;
          randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
          console.log(min,max,randomNumber, this.zenQuoteList.slice(randomNumber, randomNumber+1)[0].q);
          return this.zenQuoteList.slice(randomNumber, randomNumber+1)[0].q;
        case QType.Norris:
          max = this.norrisQuoteList.length;
          randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
          return this.norrisQuoteList.slice(randomNumber, randomNumber+1)[0].q;
        default:
          break;
      }
      return "unable to select random quote";
    }

  loadDummyQuotes()
  {
    this.dummyQuoteList = dummyQuotes;
  }

  loadZenQuotes() : Observable<any>
  {
    return this.http.get(urlProxy  + quoteurl, {
      headers: {
        'content-type' : 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
  }

  loadNorrisQuotes()
  {
    
  }



  // getQuote() : Observable<any>
  // {
  //   // use this for multi api calls
  //   // https://nehalist.io/multiple-http-requests-in-angular/
  //   // forkJoin([]).subscribe()

  //   console.log('here2.0')
  //   return this.http.get(urlProxy  +quoteurl, {
  //     headers: {
  //       'content-type' : 'application/json; charset=utf-8',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
  //       'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  //       'Access-Control-Allow-Credentials': 'true'
  //     }
  //   });

  //  }

  //  async getApiTest() : Promise<any> {
  //   try {
  //     const response = await fetch(quoteurl, {mode: 'cors'});
  //     var data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  // initalizeQuotes() : void
  // {
  //   console.log("initalizing quotes")
  //   this.quoteList = quotes;
  //   this.hasLoadedQuotes = true;
  // }

  // getNewQuote() : any
  // {
  //   console.log("getNewQuote");
  //   let min : number = 0;
  //   let max : number = this.quoteList.length;
  //   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
  //   console.log("rand", randomNumber, "min", min,"max", max);
  //   console.log(this.quoteList.slice(randomNumber, randomNumber+1));
  //   console.log(this.quoteList.slice(randomNumber, randomNumber+1)[0]);
  //   console.log(this.quoteList.slice(randomNumber, randomNumber+1)[0].q);
  //   return this.quoteList.slice(randomNumber, randomNumber+1)[0].q;
  // }

  // async getDummyQuotes(num : any)
  // {
  //   console.log("quote.quoteservice.getDummyQuotes()")
  //   let qArr : any[] = [];

  //   for (let i=0; i < num.length; i++)
  //   {
  //     this.getDummyQuote().then(data =>
  //       {
  //         console.log("returning from quote.quoteservice.getDummyQuote()",data)
  //         qArr+=data;
  //       });
  //   }

  //   return qArr;
  // }
  // async getDummyQuote()
  // {
  //   if (!this.hasLoadedQuotes)
  //   {this.initalizeQuotes();}

  //   return this.getNewQuote();
  // }  
}