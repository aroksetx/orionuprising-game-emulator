import { ElementRef, ViewChild } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { CentMessagerService } from '../services/cent-messsager/cent-messager.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.sass']
})
export class GameboardComponent implements OnInit {
   users = [];


  constructor(private cent: CentMessagerService) { 
    
    this.cent.centrifugeInstance.on('connect', function(context) {
      console.log(':::>>>>>context-connect', context);
    });

    this.cent.centrifugeInstance.on('disconnect', function(ctx) {
      console.log("::::>>>disconnected-disconnect", ctx);
  });

  this.cent.centrifugeInstance.connect();

  }

  ngOnInit(): void {

    var callbacks = {
      "publish": function({data}) {
          // See below description of message format
          this.users.push(data.user);
          console.log(data);
      },
      "join": function(message) {
          // See below description of join message format
          console.log(message);
      },
      "leave": function(message) {
          // See below description of leave message format
          console.log(message);
      },
      "subscribe": function(context) {
          // See below description of subscribe callback context format
          console.log(context);
      },
      "error": function(errContext) {
          // See below description of subscribe error callback context format
          console.log(errContext);
      },
      "unsubscribe": function(context) {
          // See below description of unsubscribe event callback context format
          console.log(context);
      }
  }
  
    var subscription =  this.cent.centrifugeInstance.subscribe("useradd", callbacks);
  }


  addUserToRoom(user) {
    this.users.push(user); 
    this.cent.sendMessageToChannel("useradd", {
      user
    });
  }

}
