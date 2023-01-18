import { Component, OnInit, OnDestroy } from '@angular/core';
import { apikey } from 'src/api-key';
import { voteDTO } from 'src/models/voteDTO';
import { CatapiService } from 'src/catapi.service'; 


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit, OnDestroy {

  numCats : number = 0;
  catpics : any[] = [];
  now : number | Date = Date.now();
  validation = {required: true, min:1, max:25};
  
  // Dependency Injection
  // Instead of the component class itself  instantiaiting, the HttpClient class, we ask the framework to 'inject' an isntanc(copy) of Http Client
  // Design pattern for loose coupling 

  constructor(private catapi : CatapiService) {}

  // when this component mounts/renders for the first time, run wahtever code in here
  ngOnInit(): void {console.log(apikey)};
  // great place to do any cleanups
  ngOnDestroy(): void{}

  incrementCats() :void{this.numCats++;}
  decrementCats() :void{this.numCats--;}
  reset() : void 
  {
    this.numCats=0;
    this.catpics.length = 0;
  }

  vote(args : voteDTO) : void {
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
      // assembling and sending the get request
      this.catapi.getCats(this.numCats).subscribe((data: any) => {
        // httpClient returns an observable to handle asynchronous request
        console.log(data);
        this.catpics = data;
      })
    }
  }
}


