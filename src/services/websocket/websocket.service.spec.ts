import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WebsocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],

  }));

  it('should be created', () => {
    const service: WebsocketService = TestBed.get(WebsocketService);
    expect(service).toBeTruthy();
  });
});
