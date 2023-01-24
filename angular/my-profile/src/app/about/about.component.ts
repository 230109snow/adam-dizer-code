import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  imgProfileSrc : string = "https://media.licdn.com/dms/image/C4E03AQHjANs3rwd0ag/profile-displayphoto-shrink_800_800/0/1647207368334?e=1680134400&v=beta&t=HpFIZkrECQjyyuum-rOhIJPBnCw-pnIFPcJ9Z0QC_u4";

  constructor(private currentRoute: ActivatedRoute) {}

  ngOnInit(): void
  {

  }
}
