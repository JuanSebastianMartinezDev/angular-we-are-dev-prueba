import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sector, SectorAdapter } from '../../core/models/sector.model';
import { ModalComponent } from '../../modal/modal.component';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SectorService {

  url = "http://localhost:5000/api/sector";

  headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private adapter: SectorAdapter
    ) { 
    this.headers.set('Content-Type','application/json');
    this.headers.set('Accept', 'application/json');
  }

  getAllSectors(): Observable<Sector[]> {
    return this.http.get(this.url,{headers: this.headers }).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data.slice(0,10).map((item: any) => this.adapter.adapt(item)) 
      })
    );  

    return of([]);
  }

  getSectorById(id : number): Observable<Sector> {
    return this.http.get(this.url+'/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        console.log(data);
        return this.adapter.adapt(data);
      })
    );

    return of();
  }

  updateSector(type : Sector): Observable<boolean> {
    return this.http.put(this.url+'/'+type.id,type).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  deleteSectorById(id : number): Observable<boolean> {
    return this.http.delete(this.url+'/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  restoreSectorById(id : number): Observable<boolean> {
    return this.http.post(this.url+'/restore/'+id,{}).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  saveSector(type : Sector): Observable<boolean> {
    return this.http.post(this.url,type).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        console.log(data);
        return data;
      })
    );

    return of();
  }
}