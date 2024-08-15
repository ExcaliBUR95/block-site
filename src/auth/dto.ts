import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@email.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@email.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;
}

export class GetSessiongInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  'iat': number;

  @ApiProperty()
  'exp': number;
}
