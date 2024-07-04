import { Controller, Get } from '@nestjs/common'

@Controller({})
export class TaskController {
    // El decorador @GET recibe como parametro la ruta que se manejara con el controlador
    @Get('/tasks')
    getAllTasks() {
        return 'Obteniendo todas las tareas'
    }
}
