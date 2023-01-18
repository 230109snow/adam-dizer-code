import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {

  statusCode : string = "";
  imgSrc : string = "";

  constructor(private http: HttpClient) {}

  fetchStatusCode()
  {
      this.imgSrc = `https://http.dog/${this.statusCode}.jpg`;
  }

}
