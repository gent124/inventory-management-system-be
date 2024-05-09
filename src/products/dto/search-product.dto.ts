import { IsString } from 'class-validator';

export class SearchProductDto {
  @IsString()
  searchTerm: string;
}
