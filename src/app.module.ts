import { Module } from '@nestjs/common'
import { TasksModule } from './tasks/task.module'
import { ProjectsModule } from './projects/projects.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { HelloController } from './hello/hello.controller';

@Module({
    imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
    controllers: [HelloController],
    providers: [],
})
export class AppModule {}
