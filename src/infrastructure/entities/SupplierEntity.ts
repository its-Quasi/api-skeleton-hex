import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SupplierEntity {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number

  @Column()
  companyName: string;

  @Column()
  contactName: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postalCode?: string;

  @Column()
  country: string;

  @Column()
  phone: string;
}