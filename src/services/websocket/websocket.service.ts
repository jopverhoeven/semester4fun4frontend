import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  ws: WebSocket;
  socketIsOpen = 1;

  createObservableSocket(url: string, object?: Object): Observable<any> {
    this.ws = new WebSocket(url);

    this.ws.onopen = () => {
      if (object) {
        this.sendObject(object);
      }
    };

    return new Observable(
      observer => {

        this.ws.onmessage = (event) => observer.next(event.data);

        this.ws.onerror = (event) => observer.error(event);

        this.ws.onclose = (event) => observer.complete();

        return () => this.ws.close(1000, 'User disconnected');
      }
    );
  }

  sendMessage(message: string) {
    if (this.ws.readyState === this.socketIsOpen) {
      this.ws.send(message);
    }
  }

  sendObject(object: any) {
    if (this.ws.readyState === this.socketIsOpen) {
      this.ws.send(JSON.stringify(object));
    }
  }
}
