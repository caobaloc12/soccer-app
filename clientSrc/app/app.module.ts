import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TeamListComponent} from './components/team/team-list.component';
import {PlayerListComponent} from './components/player/player-list.component';
import {TeamDetailsComponent} from './components/team/team-details.component';
import {PlayerDetailsComponent} from './components/player/player-details.component';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule
   ],
  declarations: [AppComponent, TeamListComponent, TeamDetailsComponent, PlayerListComponent, PlayerDetailsComponent],
  bootstrap: [AppComponent]
})



export class AppModule { }
