import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";

export class ClientAnnotation {
  constructor(
    public id: number,
    public name: string,
    public state: number,
    public createdAt: string,
    public updatedAt: string,
    public clientId: number
  ){}
}

@Injectable({
  providedIn: "root",
})
export class ClientAnnotationAdapter implements Adapter<ClientAnnotation> {
  adapt(item: any): ClientAnnotation {
    return new ClientAnnotation(
        item.id,
        item.name,
        item.state,
        item.createdAt,
        item.updatedAt,
        item.clientId
    );
  }
}