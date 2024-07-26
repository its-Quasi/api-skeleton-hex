import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Supplier } from "src/core/domain/models";
import { SupplierRepository } from "src/core/domain/ports/outbound";
import { SupplierEntity } from "src/infrastructure/entities/SupplierEntity";
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