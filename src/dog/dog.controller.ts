import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {

  constructor(private readonly dogService: DogService) {}

   @Get()
    public getHello(): string{
      return this.dogService.getHello();
    }
  // localhost:3000/dog/greet
    @Get('greet/:id')
    public introduce (@Param() params: any, @Query() query: any): string{
      console.log("paramns:", params);
      console.log("query:", query);
      return this.dogService.introduce();
    }

    @Post('edit')
    public modifyDetail(@Body() body: any): string {
     console.log('body', body);

     return this.dogService.modifyDetail();
    }
}
