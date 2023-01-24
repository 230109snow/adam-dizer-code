import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { ProjectsComponent } from './projects/projects.component';
import { CatsComponent } from './projects/cats/cats.component';
import { FetchComponent } from './projects/fetch/fetch.component';
import { QuoteComponent } from './projects/quote/quote.component';
import { MemeComponent } from './projects/meme/meme.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  { path: 'cats', component: CatsComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'meme', component: MemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
