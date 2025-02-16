import { Cat } from './cat.interface';

export interface ICatService {
  create(cat: Cat): void;
  findAll(): Cat[];
}
