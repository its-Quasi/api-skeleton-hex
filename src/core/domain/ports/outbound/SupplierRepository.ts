import { Supplier } from "../../models";

export interface SupplierRepository {
  findById(id: number): Promise<Supplier>
}