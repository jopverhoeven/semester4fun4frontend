import { MaterialModule } from './../../app/material/material.module';
import { CookieService } from 'ngx-cookie-service';
import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';

describe('TokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule, MaterialModule],
    providers: [CookieService]

  }));

  it('should be created', () => {
    const service: TokenService = TestBed.get(TokenService);
    expect(service).toBeTruthy();
  });
});
