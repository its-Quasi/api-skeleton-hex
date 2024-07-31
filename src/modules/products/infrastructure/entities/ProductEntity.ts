import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SupplierEntity } from "./SupplierEntity";
@Entity({ name: "products" })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unitPrice: number;

  @Column()
  unitsInStock: number;

  @Column()
  unitsOnOrder: number;

  @Column()
  categoryId: string

  @Column()
  discontinued: boolean

  @ManyToOne(() => SupplierEntity)
  @JoinColumn({ name: "supplier_id" })
  supplier: SupplierEntity;
}