import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catVoteDTO } from 'src/app/models/catVoteDTO';
import { Observable } from 'rxjs';
import { catapiroot, catapikey  } from 'src/const-cat-api';


interface CatObj {
  id : string;
  url : string;
}


@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) { }

  ngOnInit() : void
  {
    catapikey;
    catapiroot;
    console.log(catapikey);
    console.log(catapiroot);
  }

  vote(args : catVoteDTO) : Observable<CatObj> 
  {
    const {id, amount} = args;
    const payload = {"image_id": id, "value": amount}

    return this.http.post(
      `${catapiroot}votes`, 
      payload, 
      {
          headers: {
              'x-api-key': catapikey
          }
        }) as Observable<CatObj>;
  }

  getCats(numCats : number, breed : string) : Observable<any> {

    
    console.log(numCats, breed);

    let url : string = `${catapiroot}images/search?limit=${numCats}`;
    if (breed != '')
    { url += `&breed_ids=${breed}`; }

    console.log(url);

    return this.http.get(url, {
      headers: {
        'x-api-key' : catapikey
      }
    });
  }

  getBreeds() : Observable<any>
  {
    return this.http.get(`${catapiroot}breeds`, {
      headers: {
        'x-api-key' : catapikey
      }
    });
  }

}