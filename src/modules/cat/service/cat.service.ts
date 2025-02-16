import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/cat.interface';
import { ICatService } from '../interface/catService.interface';

@Injectable()
export class CatService implements ICatService {
  private static readonly cats: Cat[] = [];

  create(cat: Cat) {
    CatService.cats.push(cat);
  }

  findAll(): Cat[] {
    return CatService.cats;
  }
}
