import { Router } from 'express'
import { FuncionarioController } from './controllers/FuncionariosController'
import { EntregaEPI_Controller } from './controllers/EntregaEPIController'

const routes = Router();
const funcionariosConstroller = new FuncionarioController()
const entregaEPI_Controller = new EntregaEPI_Controller()


routes.post('/funcionarios', funcionariosConstroller.create)
routes.get('/funcionarios', funcionariosConstroller.index)

routes.post('/entregaEPI', entregaEPI_Controller.create)
routes.get('/entregaEPI', entregaEPI_Controller.index)
routes.get('/entregaEPI/:id', entregaEPI_Controller.show)
routes.delete('/entregaEPI/:id', entregaEPI_Controller.delete)
routes.put('/entregaEPI/:id', entregaEPI_Controller.update)


export { routes }

