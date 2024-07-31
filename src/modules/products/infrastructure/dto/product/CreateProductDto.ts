import { IsInt, IsMongoId, IsPositive, IsString, Min } from "class-validator"

export class CreateProductDto {
  @IsString()
  name: string
  @IsMongoId()
  categoryId: string
  @IsInt()
  supplierId: number
  @IsPositive()
  @Min(1)
  unitPrice: number
}