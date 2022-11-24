import { Injectable } from "@angular/core";
import { Adapter } from "../adapter/adapter";

export class TypeClient {
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
export class TypeClientAdapter implements Adapter<TypeClient> {
  adapt(item: any): TypeClient {
    return new TypeClient(
        item.id,
        item.name,
        item.state,
        item.createdAt,
        item.updatedAt
    );
  }
}