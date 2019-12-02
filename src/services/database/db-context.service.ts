import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbContextService {

  public RestURL: String = 'https://jop.salvemundi.nl/';
  // public AuthenticationURL: String = 'http://localhost:8091/';

  constructor() { }
}
