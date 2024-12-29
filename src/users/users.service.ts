import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  detail(id: number) {
    return [];
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find({});
    return users;
  }
}
