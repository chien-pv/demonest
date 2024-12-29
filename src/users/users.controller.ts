import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Params } from 'src/interface/params';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async index(@Res() res: Response) {
    try {
      const users = await this.userService.getAll();
      res
        .status(200)
        .json({ message: 'Lấy dữ liệu thành công!!', datas: users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  @Get('detail/:id')
  details(@Param() params: Params) {
    const id = params.id;

    const user = this.userService.detail(id);
    return user;
  }

  @Delete('create')
  create(@Req() request: Request, @Body() body: any) {
    console.log(body);
    return { id: 'abc', name: 'xyz' };
  }
}
// get
// post
// put
// patch
// delete
