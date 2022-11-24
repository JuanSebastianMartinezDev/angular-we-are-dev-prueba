import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country, CountryAdapter } from '../../core/models/country.model';
import { ModalComponent } from '../../modal/modal.component';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class CountryService {

  url = "http://localhost:5000/api/country";

  headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private adapter: CountryAdapter
    ) { 
    this.headers.set('Content-Type','application/json');
    this.headers.set('Accept', 'application/json');
  }

  getAllCountrys(): Observable<Country[]> {
    return this.http.get(this.url,{headers: this.headers }).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data.slice(0,10).map((item: any) => this.adapter.adapt(item)) 
      })
    );  

    return of([]);
  }

  getCountryById(id : number): Observable<Country> {
    return this.http.get(this.url+'/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return this.adapter.adapt(data);
      })
    );

    return of();
  }

  updateCountry(country : Country): Observable<boolean> {
    return this.http.put(this.url+'/'+country.id,country).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  deleteCountryById(id : number): Observable<boolean> {
    return this.http.delete(this.url+'/'+id).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  restoreCountryById(id : number): Observable<boolean> {
    return this.http.post(this.url+'/restore/'+id,{}).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }

  saveCountry(country : Country): Observable<boolean> {
    return this.http.post(this.url,country).pipe(
      // Adapt with each cycle
      map((data: any) =>  {
        return data;
      })
    );

    return of();
  }
}