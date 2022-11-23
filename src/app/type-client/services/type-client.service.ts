import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TypeClient, TypeClientAdapter } from '../../core/models/type-client.model';
import { ModalComponent } from '../../modal/modal.component';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class TypeClientService {

   url: string = "https://localhost:7149/";

  constructor(
    private http: HttpClient,
    private adapter: TypeClientAdapter
    ) { }

  getAllTypeClients(): Observable<TypeClient[]> {
    this.http.get(this.url+'type-client').pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        console.log(data);
        return data.items.slice(0,10).map((item: any) => this.adapter.adapt(item)) 
      })
    );  

    return of([]);
  }

  getTypeClientById(id: number): Observable<TypeClient> {
    return this.http.get(this.url+'type-client/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        console.log(data);
        return this.adapter.adapt(data);
      })
    );

    return of();
  }


}