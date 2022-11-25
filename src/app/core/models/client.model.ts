import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";
import { ClientAnnotation } from "./client-annotation.model";
import { ClientTag } from "./client-tag.model";

export class Client {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public urlImage: string,
    public description: string,
    public phone: string,
    public phone2: string,
    public typeClientId: string,
    public countryId: string,
    public sectorId: string,
    public state: number,
    public createdAt: string,
    public updatedAt: string,
    public annotations: ClientAnnotation[] = [],
    public tags: ClientTag[] = []
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
      item.urlImage,
      item.description,
      item.phone,
      item.phone2,
      item.typeClientId,
      item.countryId,
      item.sectorId,
      item.state,
      item.createdAt,
      item.updatedAt,
      item.annotations,
      item.tags,
    );
  }
}