import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { ICatService } from './interface/catService.interface';

@Controller('cat')
export class CatController {
  private readonly catService: ICatService;

  constructor(catsService: ICatService) {
    this.catService = catsService;
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto): string {
    return 'This action returns all cats';
  }
}
