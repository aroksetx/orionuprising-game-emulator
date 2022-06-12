import { Injectable } from '@angular/core';
import Centrifuge from 'centrifuge'

@Injectable({
  providedIn: 'root'
})
export class CentMessagerService {
  public centrifugeInstance: any = null;
  
  constructor() { 
    this.centrifugeInstance = new Centrifuge("ws://centrifugo3.herokuapp.com/connection/websocket");
    this.centrifugeInstance.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTU1ODk5MzB9.n4WYfazQrMenqL2lJnQ8mYwbNC9sYw5tftJZHWw1Aqk');
    console.log(this.centrifugeInstance);
    
  }


  public regUserInRoom() {

  }


  public sendMessageToChannel (channel, data) {
    this.centrifugeInstance.publish(channel, data).then(function(res) {
      console.log('successfully published');
  }, function(err) {
      console.log('publish error', err);
  });
  }

}
