import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catVoteDTO } from 'src/app/models/catVoteDTO';
import { Observable } from 'rxjs';
import { apikey, apiroot } from 'src/cat-api-const';


interface CatObj {
  id : string;
  url : string;
}


@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) { }


  vote(args : catVoteDTO) : Observable<CatObj> 
  {
    const {id, amount} = args;
    const payload = {"image_id": id, "value": amount}

    return this.http.post(
      `${apiroot}votes`, 
      payload, 
      {
          headers: {
              'x-api-key': apikey
          }
        }) as Observable<CatObj>;
  }

  getCats(numCats : number) : Observable<any> {
    const url = `${apiroot}images/search?limit=${numCats}`
    return this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    });
  }

  getBreeds() : Observable<any>
  {
    const url = `${apiroot}breeds`;
    return this.http.get(url, {
      headers: {
        'x-api-key' : apikey
      }
    });
  }

}