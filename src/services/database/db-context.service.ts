import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbContextService {

  public RestURL: String = 'https://jop.salvemundi.nl:8090/';
  // public AuthenticationURL: String = 'http://localhost:8091/';

  constructor() { }
}
