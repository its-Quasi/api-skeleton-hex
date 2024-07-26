import { Category } from './Category';
import { Supplier } from "./Supplier";

export class Product {

  id: number;
  name: string;
  category: Category;
  supplier: Supplier;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  discontinued: boolean;

  constructor(name: string, category: Category, supplier: Supplier) {
    this.name = name
    this.category = category
    this.supplier = supplier
    this.discontinued = false
    this.unitPrice = 0
    this.unitsInStock = 0
    this.unitsOnOrder = 0
  }

}