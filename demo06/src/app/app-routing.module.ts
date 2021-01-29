import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewslistComponent } from './components/news/newslist/newslist.component';
import { NewscontentComponent } from './components/news/newscontent/newscontent.component';
import { HomecontentComponent } from './components/home/homecontent/homecontent.component';
import { HomelistComponent } from './components/home/homelist/homelist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'homelist', component: HomelistComponent },
      { path: 'homecontent', component: HomecontentComponent }
    ]
  },
  {
    path: 'news', component: NewsComponent,
    children: [
      { path: 'newslist', component: NewslistComponent },
      { path: 'newscontent', component: NewscontentComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
