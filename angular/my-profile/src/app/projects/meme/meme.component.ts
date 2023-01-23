import { Component, Self } from '@angular/core';
import { QuoteApiService } from 'src/app/services/quote-api.service';
import { CatApiService } from 'src/app/services/cat-api.service';
import html2canvas from 'html2canvas';

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
    console.log("saveMeme")

    let divElement : HTMLElement | any = document.getElementById('meme-container');
    let imageElement :HTMLElement[] | any[] = divElement.children[0];
    let textElement :HTMLElement[] | any[] = divElement.children[1];
    // let imageElement :HTMLElement | any = document.getElementById('meme-image-container');
    // let textElement :HTMLElement | any = document.getElementById('meme-quote-container');

    console.log(divElement);
    console.log(divElement.offsetWidth);
    console.log(divElement.offsetHeight);
    console.log(imageElement);
    console.log(textElement);

    let canvas = document.createElement('canvas');
    canvas.width = divElement.offsetWidth;
    canvas.height = divElement.offsetHeight;

    let ctx : CanvasRenderingContext2D | any = canvas.getContext('2d');
    let img :  HTMLImageElement | any[] = imageElement;
    
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL('image/png');
    let link = document.createElement('a');
    link.download = 'your-random-cat-meme.png';
    link.href = dataURL;
    link.click();
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
