import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Params } from 'src/interface/params';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  index(): string {
    return 'Hello users';
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
