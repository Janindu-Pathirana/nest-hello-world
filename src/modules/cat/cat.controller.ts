import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { ICatService } from './interface/catService.interface';
import { CatService } from './service/cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto): string {
    return 'This action returns all cats';
  }
}
