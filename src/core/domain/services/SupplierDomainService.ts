import { Supplier } from "../models";
import { SupplierService } from "../ports/inbound";
import { SupplierRepository } from "../ports/outbound";

export class SupplierDomainService implements SupplierService {
  constructor(private readonly repository: SupplierRepository) { }

  findById(id: number): Promise<Supplier> {
    return this.repository.findById(id)
  }
}