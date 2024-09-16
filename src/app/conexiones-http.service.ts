import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionesHttpService {


  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '**',
        'access-control-allow-headers': '**',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    )
  };

  constructor(private http: HttpClient) { }


}
