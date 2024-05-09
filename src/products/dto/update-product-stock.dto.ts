import { IsBoolean } from 'class-validator';

export class UpdateProductStockDto {
  @IsBoolean()
  increment: boolean;
}
