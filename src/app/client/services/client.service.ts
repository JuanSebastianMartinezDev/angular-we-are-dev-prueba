import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client, ClientAdapter } from '../../core/models/client.model';
import { TypeClient, TypeClientAdapter } from '../../core/models/type-client.model';
import { Sector, SectorAdapter } from '../../core/models/sector.model';
import { Country, CountryAdapter } from '../../core/models/country.model';
import { ModalComponent } from '../../modal/modal.component';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ClientService {

  url = "http://localhost:5000/api/client";

  headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private adapter: ClientAdapter
    ) { 
    this.headers.set('Content-Type','application/json');
    this.headers.set('Accept', 'application/json');
  }

  getDataViewCreateAndEdit(): Observable<any> {
    return this.http.get(this.url+'/data-view',{headers: this.headers }).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        console.log(data);
        return data;
      })
    );   

    

    return of([]);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get(this.url,{headers: this.headers }).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data.slice(0,10).map((item: any) => this.adapter.adapt(item)) 
      })
    );  

    return of([]);
  }

  getClientById(id : number): Observable<Client> {
    return this.http.get(this.url+'/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return this.adapter.adapt(data);
      })
    );

    return of();
  }

  updateClient(client : Client): Observable<boolean> {
    return this.http.put(this.url+'/'+client.id,client).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  deleteClientById(id : number): Observable<boolean> {
    return this.http.delete(this.url+'/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  restoreClientById(id : number): Observable<boolean> {
    return this.http.post(this.url+'/restore/'+id,{}).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  saveClient(client : Client): Observable<boolean> {
    return this.http.post(this.url,client).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }
}