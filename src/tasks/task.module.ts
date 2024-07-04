import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'

@Module({
    // Un modulo puede contener multiples controladores de ruta
    controllers: [TaskController],
})
export class TasksModule {}
