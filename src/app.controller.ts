import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';


class HelloWorldDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  age: number;

  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly dbService: DbService) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    const user = await this.dbService.user.findMany({})
    console.log(user)
    return {
      message: this.appService.getHello(),
      age: this.appService.getAge(),
      name: this.appService.getName(),
    };
  }
}
