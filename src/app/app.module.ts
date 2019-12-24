import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesService } from 'src/providers/games.service';
import { GamesModule } from 'src/pages/games/games.module';
import { CreatorsComponent } from '../pages/creators/creators.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GamesModule
    ],
  providers: [ GamesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
