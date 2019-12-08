import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbContextService {

  public RestURL: String = 'http://84.83.195.78:8090/';
  // public AuthenticationURL: String = 'http://localhost:8091/';

  constructor() { }
}
