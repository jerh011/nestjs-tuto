import { Module,forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// import { AuthModule } from '../auth/auth.module';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({ 
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService],
  // imports:[forwardRef(()=>AuthModule)]
  imports:[TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
