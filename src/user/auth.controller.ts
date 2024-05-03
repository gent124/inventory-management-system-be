import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userAuthenticationService: AuthService) {}

  @Post()
  async login(@Body() loginDto: UserLoginDto) {
    return await this.userAuthenticationService.signIn(
      loginDto.email,
      loginDto.password,
    );
  }
}
