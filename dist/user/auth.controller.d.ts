import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthController {
    private readonly userAuthenticationService;
    constructor(userAuthenticationService: AuthService);
    login(loginDto: UserLoginDto): Promise<{
        accessToken: string;
    }>;
}
