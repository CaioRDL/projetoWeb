import { IInterface } from './IInterface';

export interface IMedico extends IInterface {
  primeiroNome: string;
  segundoNome: string;
  idade:BigInteger;
}
