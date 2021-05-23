//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})

export class Service {
  url = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';

  constructor(private http: HttpClient) {}

  listarFundoInvestimento(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
