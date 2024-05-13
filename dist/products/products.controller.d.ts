import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SearchProductDto } from './dto/search-product.dto';
import { UpdateProductStockDto } from './dto/update-product-stock.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }[]>;
    getOverviewStats(): Promise<{
        total: number;
        mostLeftStock: string;
        mostSoldProduct: {
            difference: number;
            id: number;
            name: string;
            stock: number;
            category: string;
            createdAt: Date;
            initialStock: number;
        };
        leastSoldProduct: {
            difference: number;
            id: number;
            name: string;
            stock: number;
            category: string;
            createdAt: Date;
            initialStock: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    searchProductsByName(searchDto: SearchProductDto): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }[]>;
    updateStock(productId: number, updateProductStockDto: UpdateProductStockDto): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    deleteManyProducts(productsIds: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
