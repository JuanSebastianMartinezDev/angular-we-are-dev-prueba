import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";

export class Country {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public state: number,
    public createdAt: string,
    public updatedAt: string,
  ){}
}

@Injectable({
  providedIn: "root",
})
export class CountryAdapter implements Adapter<Country> {
  adapt(item: any): Country {
    return new Country(
        item.id,
        item.name,
        item.code,
        item.state,
        item.createdAt,
        item.updatedAt
    );
  }
}