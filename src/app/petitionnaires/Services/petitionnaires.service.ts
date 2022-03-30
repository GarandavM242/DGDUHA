import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetitionnairesService {

  private readonly urlsrv:string = "https://61f969ae69307000176f7243.mockapi.io"

  constructor(private http: HttpClient) { }

  getPet(): Observable<any> {
    return this.http.get<any>(this.urlsrv+"/Pet")
  }

  getOnePet(id:string): Observable<any> {
    return this.http.get<any>(this.urlsrv+"/Pet/"+id)
  }
 }
