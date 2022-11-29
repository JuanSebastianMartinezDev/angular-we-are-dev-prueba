import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";
import { ClientAnnotation } from "./client-annotation.model";
import { ClientTag } from "./client-tag.model";

export class Client {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public description: string,
    public urlImage: string,
    public state: number,
    public phone: number,
    public phone2: number,
    public city: string,
    public direction: string | null,
    public typeClientId: number,
    public countryId: number,
    public sectorId: number,
    public createdAt: string,
    public updatedAt: string,
    ){}
}


@Injectable({
  providedIn: "root",
})
export class ClientAdapter implements Adapter<Client> {
  adapt(item: any): Client {
    return new Client(
      item.id,
      item.name,
      item.email,
      item.description,
      item.urlImage,
      item.state,
      item.phone,
      item.phone2,
      item.city,
      item.direction,
      item.typeClientId,
      item.countryId,
      item.sectorId,
      item.createdAt,
      item.updatedAt
    );
  }
}