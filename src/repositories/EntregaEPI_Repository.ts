import { Repository, EntityRepository } from "typeorm"
import { EntregaEPI } from '../entities/EntregaEPI'

@EntityRepository(EntregaEPI)
class EntregaEPI_Repository extends Repository<EntregaEPI>{

}

export { EntregaEPI_Repository }