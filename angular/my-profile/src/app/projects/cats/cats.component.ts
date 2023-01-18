import { Component, OnInit, OnDestroy } from '@angular/core';
import { apikey } from 'src/api-key';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit, OnDestroy {

  numCats : number = 0;
  catpics : any[] = [];
  now : number | Date = Date.now();


  // Dependency Injection
  // Instead of the component class itself  instantiaiting, the HttpClient class, we ask the framework to 'inject' an isntanc(copy) of Http Client
  // Design pattern for loose coupling 

  constructor(private http: HttpClient) {}

  // when this component mounts/renders for the first time, run wahtever code in here
  ngOnInit(): void
  {console.log(apikey)};

  // great place to do any cleanups
  ngOnDestroy(): void
  {}

  incrementCats() :void{this.numCats++;}
  decrementCats() :void{this.numCats--;}
  reset() : void 
  {
    this.numCats=0;
    this.catpics.length = 0;
  }

  getCats() : void
  {
    console.log(`get ${this.numCats} gatos`);

    const url = `https://api.thecatapi.com/v1/images/search?limit=${this.numCats}`;
    this.http.get(url, 
      {headers: 
        { 'x-api-key' : apikey }
      }).subscribe(((data : any) => 
        {     
          for (let index in data)
          {this.catpics.push(data[index])}
          console.log(this.catpics);
        }
        ));
  }
}


