import { BaseModel } from "./BaseModel"

export class MedicoModel extends BaseModel {  
    primeiroNome: string | undefined;  
    segundoNome: string| undefined;
    idade: BigInt | undefined;
  }