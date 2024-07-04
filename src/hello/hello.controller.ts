import { Controller, Get } from '@nestjs/common';

@Controller({})
export class HelloController {
    @Get('/index')
    index() {
        return 'HomePage'
    }
}
