import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  // constructor(@Inject(forwardRef(() => AuthService)) private readonly authService:AuthService){}
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    // this.users.push(createUserDto);
    //validate if a user exist whit the give email
    const user = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    // create that user
    if (user) return 'el usuario con este correo ya existe';
    //save in table user
    let newUsuario = this.userRepository.create(createUserDto);
    newUsuario = await this.userRepository.save(newUsuario);
    return newUsuario;
  }

  public async findAll() {
    return this.userRepository.find();
  }

  public async findOne(idUser: number) {
    return this.userRepository.findOne({ where: { id: idUser } });
  }

  public async update(id: number, userUpdate: UpdateUserDto) {
    if (!userUpdate) {
      return `Usuario con id ${id} no encontrado`;
    }
    return this.userRepository.update(id,userUpdate );
  }

  public async remove(idUser: number) {
    return this.userRepository.delete({ id: idUser });
  }
}
  