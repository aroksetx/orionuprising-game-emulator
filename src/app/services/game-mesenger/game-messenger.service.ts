import { Injectable } from "@angular/core";
import Centrifuge from "centrifuge";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameMessengerService {
  centrifuge;

  constructor() {
    this.centrifuge = new Centrifuge(
      "ws://centrifugo3.herokuapp.com/connection/websocket"
    );

    this.centrifuge.setToken(this.tokensList[0]);

   

    this.centrifuge.connect();
  }

  tokensList = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDEiLCJleHAiOjE2NTU2MDQ3NTB9.F0avP3CEts9STi40MIpktIovg212ff_ker-YiPWJ8fM",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDIiLCJleHAiOjE2NTU2MDQ3NTJ9.nDvw1b55S5Lc8LAp8nnrp5ngCOgbu0xI8My7jTx-8Vc",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDMiLCJleHAiOjE2NTU2MDQ3NTV9.7eHO2PthPA9Y69WXaTxSR96_QWnL79wyVf3bGuAdfQ8",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDQiLCJleHAiOjE2NTU2MDQ3NTd9.DPr-X7TNPgpXwBqLrEblfRBcgrAYhQBwnBT1BW2HiUY",
  ];

  connectUserToGameroom() {}

  generateUserToken(user: any) {}


  getRoomUpdate(){
    return  Observable.create((observer) => {
      this.centrifuge.subscribe("news", function ({data}) {
        observer.next(data);
      });

  });
  }

  publich(user){
    this.centrifuge.publish("news", {value: user}).then(function(res) {
      console.log('successfully published');
  }, function(err) {
      console.log('publish error', err);
  });
  }
}
