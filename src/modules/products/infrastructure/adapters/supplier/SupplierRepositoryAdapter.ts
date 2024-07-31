import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Supplier } from "src/modules/products/core/domain/models";
import { SupplierRepository } from "src/modules/products/core/domain/ports/outbound";
import { SupplierEntity } from "src/modules/products/infrastructure/entities/SupplierEntity";
import { Repository } from "typeorm";

@Injectable()
export class SupplierRepositoryAdapter implements SupplierRepository {

  constructor(
    @InjectRepository(SupplierEntity) private repository: Repository<SupplierEntity>
  ) { }

  findById(id: number): Promise<Supplier> {
    return this.repository.findOneBy({ id })
  }
}