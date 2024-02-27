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


  url = "https://yeffer.000webhostapp.com/appyef" //Dirección de backend
  constructor(private http:HttpClient) { }

  consultaDatos():Observable<any>{
    return this.http
    .get(this.url+'/consultaDatos')
  }

    consultaDetalles():Observable<any>{
    return this.http
    .get(this.url+'/consultaDetalles')
  }

  insertarDatos(datos:any):Observable<any>{
    return this.http
    .post(this.url+"/insertarDatos", JSON.stringify(datos))
    .pipe(tap(()=>{
      this.refresh$.next()
    }))
  }

  insertarDetalless(detalles:any):Observable<any>{
    return this.http
    .post(this.url+"/insertarDetalless", JSON.stringify(detalles))
    .pipe(tap(()=>{
      this.refresh$.next()
    }))
  }
                                    
  removeDatos(datId:any){   
    //const enviar={datId:datId}                                      
    return this.http
    .post(this.url+"/removeDatos", JSON.stringify(datId))
    .pipe(tap(()=>{
      this.refresh$.next()}
  ))
  }

  removeDetalles(idimagen:any){   
    //const enviar={datId:datId}                                      
    return this.http
    .post(this.url+"/removeDetalles", JSON.stringify(idimagen))
    .pipe(tap(()=>{
    this.refresh$.next()}
    ))
  }
    
  updateDatos(datos:any){
    //const enviar={datId:datId}
    return this.http.post(this.url+"/updateDatos", JSON.stringify(datos))
    .pipe(tap(()=>{
    this.refresh$.next()}
    ))
  }

  updateDetalles(Detalles:any){
    //const enviar={idimagen:idimagen}
    return this.http.post(this.url+"/updateDetalles", JSON.stringify(Detalles))
    .pipe(tap(()=>{
    this.refresh$.next()}
    ))
  }
}
