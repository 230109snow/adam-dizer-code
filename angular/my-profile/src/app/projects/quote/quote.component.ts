import { Component } from '@angular/core';
import { QuoteApiService } from 'src/app/services/quote-api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  quoteStr : string = "";

  constructor(private quoteapi : QuoteApiService) {}

  getQuote() : void
  {
    this.quoteapi.getQuote().subscribe((data: any) => 
    {
      console.log(data)
      this.quoteStr = data;
    })
  }

}
