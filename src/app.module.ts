import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
@Module({
  imports: [
    PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    CoreModule,
    InfrastructureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
