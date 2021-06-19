import { Request, Response } from 'express'
import { EntregaEPI_Services } from '../services/EntrgaEPI_Services'

class EntregaEPI_Controller {
    async create(request: Request, response: Response) {
        const { funcionario_id, nome_epi, quantidade_entregue, data_entrega } = request.body
        const entregaEPI_Services = new EntregaEPI_Services()

        const entregaEPI = await entregaEPI_Services.create({ funcionario_id, nome_epi, quantidade_entregue, data_entrega })
        return response.json(entregaEPI)
    }

    async index(request: Request, response: Response) {
        const entregaEPI_Services = new EntregaEPI_Services()
        try {
            const entregaEPI = await entregaEPI_Services.index()
            return response.json(entregaEPI)
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message })
        }

    }
    async show(request: Request, response: Response) {
        const entregaEPI_Services = new EntregaEPI_Services()
        const { id } = request.params

        try {
            const entregaEPI = await entregaEPI_Services.show({ id })
            return response.json(entregaEPI)
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
    async delete(request: Request, response: Response) {
        const entregaEPI_Services = new EntregaEPI_Services()
        const { id } = request.params
        try {
            await entregaEPI_Services.delete({ id })
            return response.json({ message: "Entrega excluida pelo id" })
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
    async update(request: Request, response: Response) {
        const entregaEPI_Services = new EntregaEPI_Services()
        const { id } = request.params
        const { funcionario_id, nome_epi, quantidade_entregue, data_entrega } = request.body

        try {
            const entregaEPI = await entregaEPI_Services.update(id, { funcionario_id, nome_epi, quantidade_entregue, data_entrega })
        } catch (err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
}
export { EntregaEPI_Controller }