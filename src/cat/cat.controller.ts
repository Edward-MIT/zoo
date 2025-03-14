import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
// localhos: 3000/cat
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  public getHello(): string{
    return this.catService.getHello();
  }
// localhost:3000/cat/greet
  @Get('greet')
  public introduce(): string{
    return this.catService.introduce();
  }
}
