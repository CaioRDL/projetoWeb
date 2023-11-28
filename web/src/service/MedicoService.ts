import { IResultHttp } from "src/inteface/IResultHttp";
import { BaseService } from "./BaseService";
import { MedicoModel } from "src/model/MedicoModel";
import { HttpService } from "./HttpService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class MedicoService  extends BaseService<MedicoModel> {

  

    constructor(public override http: HttpService) {
        super('medicos', http);
      }
      


}