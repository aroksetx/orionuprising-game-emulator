import { TestBed } from '@angular/core/testing';

import { GameMessengerService } from './game-messenger.service';

describe('GameMessengerService', () => {
  let service: GameMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
