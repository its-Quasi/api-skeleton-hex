import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SupplierEntity } from "./SupplierEntity";
import { CategoryEntity } from "./CategoryEntity";

@Entity({ name: "products" })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  quantityPerUnit: number;

  @Column()
  unitPrice: number;

  @Column()
  unitsInStock: number;

  @Column()
  unitsOnOrder: number;

  category: CategoryEntity;

  @ManyToOne(() => SupplierEntity)
  @JoinColumn({ name: "supplier_id" })
  supplier: SupplierEntity;
}