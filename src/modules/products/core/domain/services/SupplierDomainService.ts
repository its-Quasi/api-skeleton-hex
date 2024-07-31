import { Supplier } from "../models";
import { ISupplierService } from "../ports/inbound";
import { SupplierRepository } from "../ports/outbound";

export class SupplierDomainService implements ISupplierService {
  constructor(private readonly repository: SupplierRepository) { }

  findById(id: number): Promise<Supplier> {
    return this.repository.findById(id)
  }
}