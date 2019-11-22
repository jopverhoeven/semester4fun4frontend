var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.socketIsOpen = 1;
    }
    WebsocketService.prototype.createObservableSocket = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new Observable(function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
            return function () { return _this.ws.close(1000, 'User disconnected'); };
        });
    };
    WebsocketService.prototype.sendMessage = function (message) {
        if (this.ws.readyState === this.socketIsOpen) {
            this.ws.send(message);
        }
    };
    WebsocketService.prototype.sendObject = function (object) {
        if (this.ws.readyState === this.socketIsOpen) {
            this.ws.send(JSON.stringify(object));
        }
    };
    WebsocketService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], WebsocketService);
    return WebsocketService;
}());
export { WebsocketService };
//# sourceMappingURL=websocket.service.js.map