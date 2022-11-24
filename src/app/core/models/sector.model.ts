import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";

export class Sector {
  constructor(
    public id: number,
    public name: string,
    public state: number,
    public createdAt: string,
    public updatedAt: string,
  ){}
}


@Injectable({
  providedIn: "root",
})
export class SectorAdapter implements Adapter<Sector> {
  adapt(item: any): Sector {
    return new Sector(
        item.id,
        item.name,
        item.state,
        item.createdAt,
        item.updatedAt
    );
  }
}