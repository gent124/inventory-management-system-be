import { IsString } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateProductDto {
  @IsString()
  readonly name: string;

  @Type(() => Number)
  readonly stock: number;

  readonly category?: string;
}
