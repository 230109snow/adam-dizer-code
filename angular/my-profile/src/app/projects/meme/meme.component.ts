import { Component, Self } from '@angular/core';
import { QuoteApiService } from 'src/app/services/quote-api.service';
import { CatApiService } from 'src/app/services/cat-api.service';
import html2canvas from 'html2canvas';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent {

  catPics : any[] = [];
  quoteArr : any[] = [];
  quoteStr : string = "";

  imgID : any;

  constructor(private quoteapi : QuoteApiService, private catapi : CatApiService){}

  saveMeme()
  {
    console.log("saveMeme()")

    // get elements from page
    let divElement : HTMLElement | any = document.getElementById('meme-container');
    let imageElement :HTMLImageElement | any = document.getElementById('meme-image');
    let textElement :HTMLParagraphElement | any = document.getElementById('meme-quote');
    
    //create canvas and drawing tool
    let canvas : HTMLCanvasElement = document.createElement('canvas');
    let ctx : CanvasRenderingContext2D | any = canvas.getContext('2d');    

    // lets prep the canvas set the canvase size
    canvas.width = divElement.offsetWidth;
    canvas.height = divElement.offsetHeight;

    // set the image // lets bypass the CORS error while drawing from the image source
    let img : HTMLImageElement = new Image()
    img.src = `https://cors-anywhere.herokuapp.com/${imageElement.src}`;
    img.crossOrigin = "anonymous";
    img.onload = (e) => {
      ctx.drawImage(img, 50, 50);
    }

    // set the text
    const fontSize : string = "25pt";
    const fontStyle : string = "Ariel";
    ctx.font = `${fontSize} ${fontStyle}`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    // Set up initial x and y coordinates 
    const leftMargin : number = 50;
    const newLineMargin : number = 50;
    const wordSpaceMargin : string = "  ";
    let x : number = leftMargin; 
    let y : number = imageElement.height + newLineMargin; 
    let q : string = textElement.innerHTML;
    let words : any[] = q.split(" "); 
    
    // Set up canvas width and height 
    const canvasWidth : number = canvas.width - 50; 
    console.log("canvasWidth",canvasWidth);


    // Loop through each word 
    words.forEach(word  => 
      { 

        // Measure the width of the word 
        let wordWidth = ctx.measureText(word).width; 

        let letters : any[] = word.split("");
        letters.forEach(letter  =>
          {
            let letterWidth = ctx.measureText(letter).width; 
            ctx.fillText(letter,x,y)
            x += letterWidth;

          });

          x += ctx.measureText(wordSpaceMargin).width; 
          ctx.fillText(wordSpaceMargin,x,y)

        //Check if word will fit on canvas
        if (x + wordWidth > canvasWidth) 
        { 
          x = leftMargin;
          y += newLineMargin; 
        }
        
      });


    console.log("divElement", divElement);
    console.log("divElement Height", divElement.offsetHeight);
    console.log("divElement Width", divElement.offsetWidth);
    console.log("imageElement", imageElement);
    console.log("textElement", textElement);
    console.log("textElement innerHTML", textElement.innerHTML);
    console.log(ctx);

    let dataURL = canvas.toDataURL('image/png');
    let link = document.createElement('a');
    link.download = 'your-meme.png';
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
