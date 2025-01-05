import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async index() {
    const users = await this.userService.getAll();
    return users;
  }

  @Post()
  async createUser() {
    const userParam = {
      firstName: 'Jane2',
      lastName: 'Smith2',
    };
    const user = await this.userService.createUser(userParam);
    return user;
  }
  @Put()
  async updateUser() {
    const userParam = {
      firstName: 'Jane2',
      lastName: 'Smith2',
    };
    const user = await this.userService.updateUser(userParam, 2);
    return user;
  }
  @Delete()
  deleteUser() {
    const user = this.userService.deleteUser([2, 3, 4]);
    return user;
  }
}
