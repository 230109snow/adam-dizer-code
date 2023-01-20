import { Component } from '@angular/core';
import { QuoteApiService } from 'src/app/services/quote-api.service';
import { CatApiService } from 'src/app/services/cat-api.service';
//import { html2canvas } from 'html2canvas';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent {

  catPics : any[] = [];
  quoteArr : any[] = [];
  quoteStr : string = "";

  constructor(private quoteapi : QuoteApiService, private catapi : CatApiService){}

  saveMeme()
  {
    // console.log("saveMeme")
    // var element = document.getElementById('meme-container');
    // html2canvas(element, {
    //   onrendered: function(canvas:any) {
    //     var link = document.createElement('a');
    //     link.download = 'divId.jpg';
    //     link.href = canvas.toDataURL('image/jpeg');
    //     link.click();
    //   }
    // });
  }

  createMeme(num:number)
  {
    this.quoteapi.getDummyQuote().then((data: any) => 
    {
      this.quoteStr = data;
      //this.quoteArr = data;
    })
    this.catapi.getCats(num,"").subscribe((data: any) => 
    {this.catPics = data;})
  }

}
