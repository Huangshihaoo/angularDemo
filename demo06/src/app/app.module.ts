import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewslistComponent } from './components/news/newslist/newslist.component';
import { NewscontentComponent } from './components/news/newscontent/newscontent.component';
import { HomecontentComponent } from './components/home/homecontent/homecontent.component';
import { HomelistComponent } from './components/home/homelist/homelist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewslistComponent,
    NewscontentComponent,
    HomecontentComponent,
    HomelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
