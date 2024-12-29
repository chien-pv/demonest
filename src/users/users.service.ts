import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  detail(id: number) {
    const users = [
      { id: 1, name: 'nguyen van A' },
      { id: 2, name: 'nguyen van B' },
      { id: 3, name: 'nguyen van C' },
    ];
    const user = users.find((item) => item.id == id);
    return user;
  }
}
