import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
   users: {id: number,name:string,email:string,age:number,gender?:string,isMarried: boolean}[]=[
      {id: 1,name:'jhon',email:"jesus@si.com",age:28,gender: 'male',isMarried:true},
      {id: 2 ,name:'MAKAKOtAKTICO',email:"si@si.com",age:10,gender: 'COOMPAÑERE',isMarried:true}
    ]

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return "sea creado un nuevo usuario"
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(x=>x.id===id);
  }

  update(id: number
    // , updateUserDto: UpdateUserDto
 ) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
  