import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"
import { EntidadeBase } from "./EntidadeBase"

@Entity()
export class Medico extends EntidadeBase{
   
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    primeiroNome: string

    @Column()
    segundoNome: string

    @Column()
    idade: number
}
