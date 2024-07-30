import { Supplier } from "./Supplier";

export class Product {

  id: number;
  name: string;
  categoryId: string;
  supplier: Supplier;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  discontinued: boolean;

  constructor(name: string, categoryId: string, supplier: Supplier) {
    this.name = name
    this.categoryId = categoryId
    this.supplier = supplier
    this.discontinued = false
    this.unitPrice = 0
    this.unitsInStock = 0
    this.unitsOnOrder = 0
  }

}