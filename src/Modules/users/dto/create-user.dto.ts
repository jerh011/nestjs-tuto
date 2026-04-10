import { 
  IsBoolean, 
  IsEmail, 
  IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsString, 
  MinLength 
} from "class-validator";

export class CreateUserDto {


  @IsString({ message: 'El nombre debe ser un texto (string).' })
  @IsNotEmpty({ message: 'El nombre no debe estar vacío.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  firstName!: string;
  
  @IsString({ message: 'El apellido debe ser un texto (string).' })
  @IsNotEmpty({ message: 'El apellido no debe estar vacío.' })
  @MinLength(3, { message: 'El apellido debe tener al menos 3 caracteres.' })
  lastName!: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  email!: string;
  
  @IsNumber({}, { message: 'La edad debe ser un número.' })
  @IsNotEmpty({ message: 'La edad es obligatoria.' })
  age!: number;
  
  @IsString({ message: 'El género debe ser un texto (string).' })
  @IsOptional()
  gender?: string;
  
  // @IsBoolean({ message: 'El campo isMarried debe ser verdadero o falso.' })
  // @IsNotEmpty({ message: 'El estado civil es obligatorio.' })
  // isMarried!: boolean;

  @IsString({ message: 'la contraseña debe ser un texto (string).' })
  @IsNotEmpty({ message: 'la contraseña no debe estar vacío.' })
  @MinLength(3, { message: 'la contraseña debe tener al menos 3 caracteres.' })
  password!:string;
}