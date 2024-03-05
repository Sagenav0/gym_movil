import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  
  private _refresh$ = new Subject<void>() 

  get refresh$(){
    return this._refresh$
  }


  url = "http://localhost:8080" //Dirección de backend
  constructor(private http:HttpClient) { }

  consultaDatos():Observable<any>{
    return this.http
    .get(this.url+'/consultaDatos')
  }

  cambiarContra(con:any):Observable<any>{
    return this.http
    .post(this.url+"/cambiarContra", JSON.stringify(con))
    .pipe(tap(()=>{
        this.refresh$.next()
    }))
  }
}
