import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "suppliers" })
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "company_name" })
  companyName: string;

  @Column({ name: "contact_name" })
  contactName: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column({
    nullable: true
  })
  postalCode?: string;

  @Column()
  country: string;

  @Column()
  phone: string;
}