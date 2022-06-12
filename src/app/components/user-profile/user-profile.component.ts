import { Component, OnInit } from '@angular/core';
import { GameMessengerService } from 'src/app/services/game-mesenger/game-messenger.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user = null;

  constructor(private messageSer: GameMessengerService) { }

  ngOnInit(): void {
    
  }

}
