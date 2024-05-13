import { PrismaService } from '../common/services/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }>;
    findAllProductsByName(searchTerm: string): Promise<{
        id: number;
        name: string;
        stock: number;
        category: string;
        createdAt: Date;
        initialStock: number;
    }[]>;
    deleteMany(ids: number[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
}
