import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/services/prisma.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly prismaService;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    signIn(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
