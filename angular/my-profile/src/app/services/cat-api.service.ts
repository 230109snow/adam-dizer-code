import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catVoteDTO } from 'src/app/models/catVoteDTO';
import { Observable } from 'rxjs';
import { catapikey, catapiroot } from 'src/cat-api-const';


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
    const url = `${catapiroot}breeds`;
    return this.http.get(url, {
      headers: {
        'x-api-key' : catapikey
      }
    });
  }

}