import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from 'src/app/services/quote-api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  quoteStr : string = "";

  constructor(private quoteapi : QuoteApiService) {}
  ngOnInit() :void{}

  getQuote() : void
  {

    console.log('here1.0')
    this.quoteapi.getQuote().subscribe((data: any) => 
    {
      console.log('here1.1')
      //this.quoteStr = data;
    })
  }

}
