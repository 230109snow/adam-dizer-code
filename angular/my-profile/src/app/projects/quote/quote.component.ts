import { Component, OnInit } from '@angular/core';
import { QType, QuoteRequest, QuoteApiService } from 'src/app/services/quote-api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteStr : string = "";

  constructor(private quoteapi : QuoteApiService) {}
  ngOnInit() :void{}

  getQuote() : void
  {

    // this.quoteStr = this.quoteapi.getQuote(QType.Zen);
    this.quoteapi.getQuote(QType.Zen).subscribe((data: any) => 
    {
      this.quoteStr = data;
    })
  }


  getQuoteDummy()
  {
    // this.quoteapi.getDummyQuote().then((data: any) => 
    // {
    //   this.quoteStr = data;
    // })
  }
  
}


