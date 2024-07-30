import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CoreModule } from './core/core.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './infrastructure/entities/SupplierEntity';
import { ProductEntity } from './infrastructure/entities/ProductEntity';
@Module({
  imports: [
    CoreModule,
    InfrastructureModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'products',
      synchronize: true,
      autoLoadEntities: true,
      entities: [SupplierEntity, ProductEntity]
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/categories')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
