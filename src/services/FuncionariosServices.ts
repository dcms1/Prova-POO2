import { getCustomRepository } from 'typeorm'
import { FuncionariosRepository } from '../repositories/FuncionariosRepository'

interface IFuncionarioCreate {
    nome: string;
    funcao: string;
    cpf: string;
}

class FuncionariosServices {
    async create({ nome, funcao, cpf }: IFuncionarioCreate) {

        const funcionarioRepository = getCustomRepository(FuncionariosRepository)

        const funcionarios = funcionarioRepository.create({
            nome,
            funcao,
            cpf
        })
        await funcionarioRepository.save(funcionarios)

        return funcionarios

    }

    async index() {
        const funcionariosRepository = getCustomRepository(FuncionariosRepository)

        const funcionarios = await funcionariosRepository.find()
        return funcionarios
    }
}

export { FuncionariosServices }