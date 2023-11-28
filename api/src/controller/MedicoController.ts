import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Medico } from "../entity/Medico"

export class MedicoController {

    private medicoRepository = AppDataSource.getRepository(Medico)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.medicoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const medico = await this.medicoRepository.findOne({
            where: { id }
        })

        if (!medico) {
            return "unregistered user"
        }
        return medico
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { primeiroNome, segundoNome,idade } = request.body;

        const medico = Object.assign(new Medico(), {
            primeiroNome,
            segundoNome,
            idade,
        })

        return this.medicoRepository.save(medico)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let medicoToRemove = await this.medicoRepository.findOneBy({ id })

        if (!medicoToRemove) {
            return "this user not exist"
        }

        await this.medicoRepository.remove(medicoToRemove)

        return "user has been removed"
    }

}