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
import {ArrayPipe} from './components/player-hand/number-to-array.pipe';
import { MarketCardComponent } from './components/card/market-card/market-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CataclysmDeckComponent} from './components/cataclysm-deck/cataclysm-deck.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),

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
    ArrayPipe,
    MarketCardComponent,
    CataclysmDeckComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
