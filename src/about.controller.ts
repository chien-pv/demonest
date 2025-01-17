import { Controller, Get, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('public')
export class AboutController {
  constructor(private jwtService: JwtService) {}
  @Get()
  index() {
    return 'hello About';
  }

  @Post('/login')
  async login() {
    const payload = { username: 'Nguyen Van A', email: 'vân@gmail.com' };
    const token = await this.jwtService.signAsync(payload, {
      secret: 'demoDA',
    });
    return { message: 'Login thành công', accessToken: token };
  }
}
