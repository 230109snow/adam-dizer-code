import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<button class="btn-class">Button</button>',
  //templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  data: number[] = [1,2,3,4]
  show : boolean = true;

  toggleClick() : void
  {
    this.show = !this.show;
  }

}
