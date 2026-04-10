import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(@Inject(forwardRef(() => AuthService)) private readonly authService:AuthService){}
   users: {id: number,name:string,email:string,age:number,gender?:string,isMarried: boolean,password:string}[]=[
      {id: 1,name:'jhon',email:"jesus@si.com",age:28,gender: 'male',isMarried:true, password:'123'},
      {id: 2 ,name:'MAKAKOtAKTICO',email:"si@si.com",age:10,gender: 'COOMPAÑERE',isMarried:true,password:'123'}
    ]

  create(createUserDto: CreateUserDto) {
    // this.users.push(createUserDto);
    return "sea creado un nuevo usuario"
  }

  findAll() {
    if(this.authService.isAuthenticated)
    return this.users;
    return "you aren't login";
  }

  findOne(id: Number) {
    return this.users.find(x=>x.id===id);
  }

  update(id: number, 
         user: UpdateUserDto
 ) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
  