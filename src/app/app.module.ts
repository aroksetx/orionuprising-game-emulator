import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { CardComponent } from './components/card/card.component';
import { DeckComponent } from './components/deck/deck.component';
import {routes} from './app.route';
import { DiceComponent } from './components/dice/dice.component';
import { NeutralPlanetComponent } from './components/neutral-planet/neutral-planet.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { GameUserListComponent } from './components/game-user-list/game-user-list.component';
import { GameRunnerComponent } from './components/game-runner/game-runner.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    GameComponent,
    PlayerHandComponent,
    CardComponent,
    DeckComponent,
    DiceComponent,
    NeutralPlanetComponent,
    UserProfileComponent,
    GameUserListComponent,
    GameRunnerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
