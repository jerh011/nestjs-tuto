import { 
  IsBoolean, 
  IsEmail, 
  IsNotEmpty, 
  IsNumber, 
  IsOptional, 
  IsString, 
  MaxLength, 
  MinLength 
} from "class-validator";

export class CreateUserDto {
  @MaxLength(100, { message: 'El maxio de carateres en nombre es de 100' })
  @IsString({ message: 'El nombre debe ser un texto (string).' })
  @IsNotEmpty({ message: 'El nombre no debe estar vacío.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  firstName!: string;

  @IsString({ message: 'El apellido debe ser un texto (string).' })
  @IsNotEmpty({ message: 'El apellido no debe estar vacío.' })
  @MinLength(3, { message: 'El apellido debe tener al menos 3 caracteres.' })
  @MaxLength(100, {
    message: 'El maxio de carateres en el apellido es de 100',
  })
  lastName!: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @MaxLength(100, { message: 'El maxio de carateres en el email es de 100' })
  email!: string;

  // @IsNumber({}, { message: 'La edad debe ser un número.' })
  // @IsNotEmpty({ message: 'La edad es obligatoria.' })
  // age!: number;

  @IsString({ message: 'El género debe ser un texto (string).' })
  @IsOptional()
  @MaxLength(10, { message: 'El maxio de carateres en el genero es de 10' })
  gender?: string;

  // @IsBoolean({ message: 'El campo isMarried debe ser verdadero o falso.' })
  // @IsNotEmpty({ message: 'El estado civil es obligatorio.' })
  // isMarried!: boolean;

  @IsString({ message: 'la contraseña debe ser un texto (string).' })
  @IsNotEmpty({ message: 'la contraseña no debe estar vacío.' })
  @MinLength(3, { message: 'la contraseña debe tener al menos 3 caracteres.' })
  @MaxLength(100, { message: 'El maxio de carateres en el contraseña es de 100' })
  password!: string;
}