import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutController } from './about.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './sql/users/users.module';
import { User } from './sql/users/user.entity';
import { Photo } from './sql/photos/photo.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'demo_nest',
      entities: [User, Photo],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, AboutController],
  providers: [AppService],
})
export class AppModule {}
