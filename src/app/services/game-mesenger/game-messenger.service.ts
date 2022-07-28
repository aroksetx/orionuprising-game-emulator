import { Injectable } from "@angular/core";
import {Centrifuge, Subscription} from 'centrifuge';
import { Observable } from "rxjs";

const TOKEN_LIST = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDEiLCJleHAiOjE2NTU2MDQ3NTB9.F0avP3CEts9STi40MIpktIovg212ff_ker-YiPWJ8fM",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDIiLCJleHAiOjE2NTU2MDQ3NTJ9.nDvw1b55S5Lc8LAp8nnrp5ngCOgbu0xI8My7jTx-8Vc",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDMiLCJleHAiOjE2NTU2MDQ3NTV9.7eHO2PthPA9Y69WXaTxSR96_QWnL79wyVf3bGuAdfQ8",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDQiLCJleHAiOjE2NTU2MDQ3NTd9.DPr-X7TNPgpXwBqLrEblfRBcgrAYhQBwnBT1BW2HiUY",
];

@Injectable({
  providedIn: "root",
})
export class GameMessengerService {
  centrifuge: Centrifuge;
  sub: Subscription;

  constructor() {
    // this.centrifuge = new Centrifuge("ws://centrifugo3.herokuapp.com/connection/websocket", {
    this.centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE2NTkyNDgzNjR9.rbrLbLzZ_leRMDRB_5Abk1V-B8jbLDmlD5cZO2R-Ee4",
      getToken: (ctx) => {
        return this.getToken('http://localhost:8000/centrifuge/connection_token', ctx);
      }
    });

    this.sub = this.centrifuge.newSubscription("news");

    this.sub.on('publication', (ctx) => {
      console.log(ctx.data);
    });
    this.sub.subscribe();

    this.centrifuge.connect();
  }

  connectUserToGameroom() {}

  generateUserToken(user: any) {}

  getRoomUpdate() {
    return Observable.create((observer) => {
      // let sub = this.centrifuge.newSubscription("news").subscribe();
      // sub.on();
      // , options => {
      //   observer.next(data);
      // });
    });
  }

  publish(user) {
    this.centrifuge.publish("news", {value: user}).then((res) => {
      console.log('successfully published');
    }, (err) => {
      console.log('publish error', err);
    });
  }

  private getToken(url, ctx): Promise<string> {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(ctx)
      })
          .then(res => {
            if (!res.ok) {
              throw new Error(`Unexpected status code ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            resolve(data.token);
          })
          .catch(err => {
            reject(err);
          });
    });
  }
}
