import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //TwoModule
  ],
  // exports: [
  //   FooComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
  data : number[] = [1,2,3,4,5];
  
}


// create module
// ng g c