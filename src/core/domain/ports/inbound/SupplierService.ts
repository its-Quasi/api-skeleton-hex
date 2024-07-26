import { Supplier } from "../../models";

export interface ISupplierService {
  findById(id: number): Promise<Supplier>;
}