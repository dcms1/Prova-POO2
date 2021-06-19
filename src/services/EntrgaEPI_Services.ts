import { getCustomRepository } from 'typeorm'
import { EntregaEPI } from '../entities/EntregaEPI'
import { EntregaEPI_Repository } from '../repositories/EntregaEPI_Repository'
import { FuncionariosRepository } from '../repositories/FuncionariosRepository'

interface IEntregaCreate {
    funcionario_id: string;
    nome_epi: string;
    quantidade_entregue: number;
    data_entrega: string;
}
interface IEntregaShow {
    id: string
}


class EntregaEPI_Services {

    async create({ funcionario_id, nome_epi, quantidade_entregue, data_entrega }: IEntregaCreate) {

        const entregaEPI_Repository = getCustomRepository(EntregaEPI_Repository)

        const entregaEPI = entregaEPI_Repository.create({
            funcionario_id,
            nome_epi,
            quantidade_entregue,
            data_entrega
        })

        await entregaEPI_Repository.save(entregaEPI)
        return entregaEPI
    }

    async index() {

        const entregaEPI_Repository = getCustomRepository(EntregaEPI_Repository)
        const funcionariosRepository = getCustomRepository(FuncionariosRepository)
        const entregaEPI = entregaEPI_Repository.find()
        const funcionarios = funcionariosRepository.find()

        return entregaEPI
    }

    async show({ id }) {
        const entregaEPI_Repository = getCustomRepository(EntregaEPI_Repository)
        const entregaEPI = await entregaEPI_Repository.findOne(id, { relations: ["funcionarios"] })
        if (!entregaEPI) {
            throw new Error('Entrega id not found!!')
        }
        return entregaEPI
    }
    async delete({ id }) {
        const entregaEPI_Repository = getCustomRepository(EntregaEPI_Repository)
        const entregaEPI = await entregaEPI_Repository.findOne(id, { relations: ["funcionarios"] })
        if (!entregaEPI) {
            throw new Error('Entrega id not found!!')
        }
        return await entregaEPI_Repository.delete({ id })
    }
    async update(id, { funcionario_id, nome_epi, quantidade_entregue, data_entrega }: IEntregaCreate) {

        const entregaEPI_Repository = getCustomRepository(EntregaEPI_Repository)

        let entregaEPI = await entregaEPI_Repository.findOne({ id })

        if (!entregaEPI) {
            throw new Error("Entrega id not found")
        }

        await entregaEPI_Repository.update(id, {
            funcionario_id,
            nome_epi,
            quantidade_entregue,
            data_entrega
        })
        entregaEPI = await entregaEPI_Repository.findOne({ id })

        return entregaEPI
    }



}
export { EntregaEPI_Services }