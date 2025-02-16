import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './modules/dog/dog.module';
import { CatModule } from './modules/cat/cat.module';

@Module({
  imports: [DogModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
