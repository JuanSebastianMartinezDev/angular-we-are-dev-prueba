import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";

export class ClientTag {
  constructor(
    public id: number | null,
    public name: string,
    public state: number,
    public createdAt: string | null,
    public updatedAt: string | null,
    public clientId: number | null
  ){}
}

@Injectable({
  providedIn: "root",
})
export class ClientTagAdapter implements Adapter<ClientTag> {
  adapt(item: any): ClientTag {
    return new ClientTag(
        item.id,
        item.name,
        item.state,
        item.createdAt,
        item.updatedAt,
        item.clientId
    );
  }
}