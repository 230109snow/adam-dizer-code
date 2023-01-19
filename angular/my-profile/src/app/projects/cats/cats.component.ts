import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatApiService } from 'src/app/services/cat-api.service';
import { catVoteDTO } from 'src/app/models/catVoteDTO';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit, OnDestroy {

  numCats : number = 1;
  strSelectedBreed : string = "";
  catBreeds : any[] = [];
  catPics : any[] = [];
  now : number | Date = Date.now();
  validation = { required: true, min : 1, max : 25 };

  // Dependency Injection
  // Instead of the component class itself  instantiaiting, the HttpClient class, we ask the framework to 'inject' an isntanc(copy) of Http Client
  // Design pattern for loose coupling 

  constructor(private catapi : CatApiService) {}

  // when this component mounts/renders for the first time, run wahtever code in here
  ngOnInit(): void
  {
    //console.log(apikey)
    this.getBreeds();
  };

  // great place to do any cleanups
  ngOnDestroy(): void
  {}

  incrementCats() : void{this.numCats++;}
  decrementCats() : void{this.numCats--;}
  reset() : void {this.numCats=1; this.catPics.length = 0;}

  getBreeds() : void
  {
    this.catapi.getBreeds().subscribe((data: any) => 
    {
      this.catBreeds = data;
    })

  }

  vote(args : catVoteDTO) : void {
    this.catapi.vote(args).subscribe({
      next: (res)=> {
          // when the request is successful, handle it her
          console.log(res)
        },
        error: (err) => {
          //when the response returns 4/500 codes, handle it here
          console.error(err)
        }
    })
  }

  getCats(form : any) : void {
    if(form.valid) {
      console.log(form)
      // assembling and sending the get request
      this.catapi.getCats(this.numCats, this.strSelectedBreed).subscribe((data: any) => 
      {
        // httpClient returns an observable to handle asynchronous request
        this.catPics = data;
      })
    }
  }
      
}




