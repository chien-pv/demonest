import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDTO } from './model/user.model';
import { UserService } from 'src/sql/users/user.service';

import { InputType, Field } from '@nestjs/graphql';

@InputType()
class UserParams {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => [UserDTO])
  async users(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Query(() => UserDTO)
  async user(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<UserDTO> {
    return await this.userService.getOne(id);
  }

  @Mutation(() => UserDTO)
  async createUser(
    @Args({ name: 'user', type: () => UserParams }) user: UserParams,
  ): Promise<UserDTO> {
    return this.userService.createUser(user);
  }
}
