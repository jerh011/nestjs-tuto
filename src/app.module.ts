import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import {UsersModule} from './Modules/users/users.module'
import { TweetModule } from './Modules/tweet/tweet.module';
import { AuthModule } from './Modules/auth/auth.module';
import { User } from './Modules/users/entities/user.entity';
@Module({
  imports: [UsersModule,TweetModule,AuthModule,TypeOrmModule.forRootAsync({
    useFactory:()=>({
      import:[],
      inject:[],
      type:'postgres',
      entities:[User],
      synchronize:true,
      host:"localhost",
      port:5432,
      username:'jerh',
      password:'123',
      database:'test'
    })
  }) ],//aqui se importan todos los modulos nuevos 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
