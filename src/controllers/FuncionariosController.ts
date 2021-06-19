import { Request, Response } from 'express'
import { FuncionariosServices } from '../services/FuncionariosServices'

class FuncionarioController {

    async create(request: Request, response: Response) {
        const { nome, funcao, cpf } = request.body

        const funcionariosServices = new FuncionariosServices()

        try {

            const Funcionarios = await funcionariosServices.create({ nome, funcao, cpf })
            return response.json(Funcionarios)

        } catch (err) {

            return response
                .status(400)
                .json({ message: err.message })

        }
    }

    async index(request: Request, response: Response) {
        const funcionariosServices = new FuncionariosServices()
        try {
            const funcionarios = await funcionariosServices.index()
            return response.json(funcionarios)
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
}
export { FuncionarioController }