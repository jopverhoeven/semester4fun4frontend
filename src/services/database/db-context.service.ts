import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbContextService {

  public RestURL: String = 'http://145.93.112.40:8090/';
  // public AuthenticationURL: String = 'http://localhost:8091/';

  constructor() { }
}
