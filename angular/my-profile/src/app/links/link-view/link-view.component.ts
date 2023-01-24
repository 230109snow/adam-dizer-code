import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-view',
  templateUrl: './link-view.component.html',
  styleUrls: ['./link-view.component.css']
})
export class LinkViewComponent {

  @Input()
  url! : string;
}
