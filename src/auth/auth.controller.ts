import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthGuard } from './auth.guard';
import { EmailDto } from './dto/email.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() signInDto: CreateUserDto ) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() emailDto: EmailDto ) {
    return this.authService.login(emailDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
