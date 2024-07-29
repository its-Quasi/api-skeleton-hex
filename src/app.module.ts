import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/entities/ProductEntity';
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierEntity } from './infrastructure/entities/SupplierEntity';
import { CoreModule } from './core/core.module';
@Module({
  imports: [
    CoreModule,
    InfrastructureModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'admin',
    //   password: 'admin',
    //   database: 'products',
    //   synchronize: true,
    //   entities: [ProductEntity, SupplierEntity]
    // }),
    // MongooseModule.forRoot('mongodb://localhost:27017/categories')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
