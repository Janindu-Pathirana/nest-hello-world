import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto): string {
    return 'This action returns all cats';
  }
}
