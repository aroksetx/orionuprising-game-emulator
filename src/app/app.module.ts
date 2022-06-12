import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameboardComponent } from './gameboard/gameboard.component';

@NgModule({
  declarations: [
    GameboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GameboardComponent]
})
export class AppModule { }
