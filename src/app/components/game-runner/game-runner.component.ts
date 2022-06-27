import { Component, OnInit } from '@angular/core';
import { GameMessengerService } from 'src/app/services/game-mesenger/game-messenger.service';

@Component({
  selector: 'app-game-runner',
  templateUrl: './game-runner.component.html',
  styleUrls: ['./game-runner.component.scss']
})
export class GameRunnerComponent implements OnInit {

  constructor(private messageSer: GameMessengerService) { }

  ngOnInit(): void {
  }

  addUser(user: any): void {
    this.messageSer.publich(user);
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}
