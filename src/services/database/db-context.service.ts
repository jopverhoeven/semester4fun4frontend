import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbContextService {

  public RestURL: String = 'http://api.fonstagram.jopverhoeven.nl/';
  // public AuthenticationURL: String = 'http://localhost:8091/';

  constructor() { }
}
