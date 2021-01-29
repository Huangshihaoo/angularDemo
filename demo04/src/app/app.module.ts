import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {RequestService} from './services/request.service';
import { NetworkComponent } from './components/network/network.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NetworkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
