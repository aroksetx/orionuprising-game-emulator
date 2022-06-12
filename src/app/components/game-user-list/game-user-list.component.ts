import { Component, OnInit } from '@angular/core';
import { GameMessengerService } from 'src/app/services/game-mesenger/game-messenger.service';
import { GameServiceService } from 'src/app/services/game-service/game-service.service';

@Component({
  selector: 'app-game-user-list',
  templateUrl: './game-user-list.component.html',
  styleUrls: ['./game-user-list.component.scss']
})
export class GameUserListComponent implements OnInit {
  users = [];

  constructor(
      private messageSer: GameMessengerService,
      private gameMessenger: GameServiceService
    ) {
      this.users = this.gameMessenger.users;
     }

  ngOnInit(): void {
    this.messageSer.getRoomUpdate().subscribe(({value}) => {
      this.gameMessenger.addUser(value);
    })
    
  }

}
