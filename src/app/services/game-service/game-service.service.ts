import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  users = []

  constructor() {
  }

  addUser(user) {
    console.log('::::user', user);
    
    this.users.push({
      name: user,
      id: this.users.length + 1
    });
    window['__user'] = this.users;
  }
}
