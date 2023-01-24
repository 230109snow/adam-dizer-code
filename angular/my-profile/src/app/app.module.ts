import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LinksComponent } from './links/links.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './projects/cats/cats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FetchComponent } from './projects/fetch/fetch.component';
import { QuoteComponent } from './projects/quote/quote.component';
import { MemeComponent } from './projects/meme/meme.component';
import { LinkListComponent } from './links/link-list/link-list.component';
import { LinkViewComponent } from './links/link-view/link-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LinksComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    CatsComponent,
    FetchComponent,
    QuoteComponent,
    MemeComponent,
    LinkListComponent,
    LinkViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
