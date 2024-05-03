import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateProductDto {
  @IsString()
  readonly name: string;

  @Type(() => Number)
  @IsNumber()
  readonly stock: number;

  @IsOptional()
  @IsString()
  readonly category?: string;
}
