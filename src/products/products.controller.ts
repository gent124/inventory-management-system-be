import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchProductDto } from './dto/search-product.dto';
import { UpdateProductStockDto } from './dto/update-product-stock.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/overview')
  getOverviewStats() {
    return this.productsService.getOverviewStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }

  @Post('/search')
  searchProductsByName(@Body() searchDto: SearchProductDto) {
    return this.productsService.searchProductsByName(searchDto.searchTerm);
  }

  @Patch(':productId/stock')
  updateStock(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() updateProductStockDto: UpdateProductStockDto,
  ) {
    console.log(productId, updateProductStockDto);
    return this.productsService.updateProductStock(
      productId,
      updateProductStockDto.increment,
    );
  }

  @Delete('/')
  deleteManyProducts(@Body() productsIds: any) {
    return this.productsService.deleteMany(productsIds);
  }
}
